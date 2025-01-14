import Cookies from "js-cookie";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const verifyUser = async (router: AppRouterInstance) => {
  const accessToken = Cookies.get("accessToken");
  if (!accessToken) {
    router.push("/signin");
    return;
  }
  try {
    const response = await fetch("/api/auth/verify", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error("Token verification failed");
    }
    const data = await response.json();
    return data.user;
  } catch {
    Cookies.remove("accessToken");
    Cookies.remove("currentUser");
    router.push("/signin");
  }
};
