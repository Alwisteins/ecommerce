import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import Cookies from "js-cookie";

interface AuthContextProviderProps {
  children: ReactNode;
}

type Auth = { token: boolean };

interface AuthContextType {
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<Auth>>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthContextProvider(props: AuthContextProviderProps) {
  const { children } = props;
  const [auth, setAuth] = useState<Auth>({ token: false });

  const readCookie = () => {
    const token = Cookies.get("token");

    if (token) {
      setAuth({ token: true });
    }
  };

  useEffect(() => {
    readCookie();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth(): AuthContextType {
  return useContext(AuthContext) as AuthContextType;
}
