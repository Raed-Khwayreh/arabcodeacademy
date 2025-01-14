import Cookies from "js-cookie";

export const logout = async () => {
  try {
    const response = await fetch("/api/auth/signout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to logout");
    }
    Cookies.remove("accessToken");
    Cookies.remove("currentUser");
  } catch (error) {
    console.error("Error during logout:", error);
  }
};
