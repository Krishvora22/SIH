// Simple API client for the Vite React app
// - Uses Vite dev proxy to talk to Next.js backend via `/api`
// - Automatically includes Authorization header if a token is set

const BASE = "/api";

let _token: string | null = null;

export function setAuthToken(token: string | null) {
  _token = token;
  try {
    if (token) localStorage.setItem("auth_token", token);
    else localStorage.removeItem("auth_token");
  } catch {}
}

export function getAuthToken(): string | null {
  if (_token) return _token;
  try {
    _token = localStorage.getItem("auth_token");
  } catch {}
  return _token;
}

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export async function apiFetch<T = any>(
  path: string,
  options: {
    method?: HttpMethod;
    body?: any;
    headers?: Record<string, string>;
  } = {}
): Promise<T> {
  const url = path.startsWith("/") ? `${BASE}${path}` : `${BASE}/${path}`;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  const token = getAuthToken();
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(url, {
    method: options.method || (options.body ? "POST" : "GET"),
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  });

  const contentType = res.headers.get("content-type") || "";
  const isJson = contentType.includes("application/json");
  const data = isJson ? await res.json() : (await res.text() as any);

  if (!res.ok) {
    const message = (isJson && (data?.error || data?.message)) || res.statusText;
    throw new Error(message || `Request failed with ${res.status}`);
  }

  return data as T;
}

// Convenience wrappers for known endpoints
export async function login(email: string, password: string) {
  const resp = await apiFetch<{ token: string; user: any }>("/auth/login", {
    method: "POST",
    body: { email, password },
  });
  setAuthToken(resp.token);
  return resp;
}
