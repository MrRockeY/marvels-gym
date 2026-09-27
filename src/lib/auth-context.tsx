import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { currentMember, currentOwner } from "./mockData";

export type Role = "owner" | "member" | null;

interface AuthContextValue {
  role: Role;
  user: typeof currentMember | typeof currentOwner | null;
  login: (role: Exclude<Role, null>) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = "forge-fitness-demo-role";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>(() => {
    if (typeof window === "undefined") return null;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === "owner" || stored === "member" ? stored : null;
  });

  const login = (nextRole: Exclude<Role, null>) => {
    window.localStorage.setItem(STORAGE_KEY, nextRole);
    setRole(nextRole);
  };

  const logout = () => {
    window.localStorage.removeItem(STORAGE_KEY);
    setRole(null);
  };

  const user = useMemo(() => {
    if (role === "owner") return currentOwner;
    if (role === "member") return currentMember;
    return null;
  }, [role]);

  const value = useMemo(() => ({ role, user, login, logout }), [role, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
