import create from 'zustand';
import jwt from 'jsonwebtoken';

const isClient = typeof window !== 'undefined';

const useAuthStore = create((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  logOut: () => {
    if (isClient) {
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
    }
    set({ user: null });
  },
}));

const initializeUserFromToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const decodedToken = jwt.decode(accessToken);
      if (decodedToken) {
        useAuthStore.setState({ user: decodedToken });
      } else {
        useAuthStore.setState({ user: null });
      }
    } catch (error) {
      console.error("Error decoding access token:", error);
      useAuthStore.setState({ user: null });
    }
  } else {
    useAuthStore.setState({ user: null });
  }
};


if (isClient) {
  initializeUserFromToken();
}

if (isClient) {
  window.addEventListener("storage", (event) => {
    if (event.key === "accessToken") {
      initializeUserFromToken();
    }
  });
}

export { useAuthStore };
