import jwt from "jsonwebtoken";

export type JwtPayload = {
  sub: string;
  email: string;
  role: "STUDENT" | "SUPERVISOR" | "ADMIN";
  iat: number;
  exp: number;
};

export function verifyTokenFromHeader(authHeader: string | null): JwtPayload | null {
  if (!authHeader) return null;

  const [type, token] = authHeader.split(" ");
  if (type !== "Bearer" || !token) return null;

  const secret = process.env.JWT_SECRET;
  if (!secret) return null;

  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch {
    return null;
  }
}

export function requireRole(payload: JwtPayload | null, role: JwtPayload["role"]) {
  return payload?.role === role;
}