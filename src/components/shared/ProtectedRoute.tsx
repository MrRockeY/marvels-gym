import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth, type Role } from "@/lib/auth-context";

export function ProtectedRoute({ role, children }: { role: Exclude<Role, null>; children: ReactNode }) {
  const { role: activeRole } = useAuth();

  if (activeRole !== role) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
