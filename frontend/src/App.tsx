import { BrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/Root";
import AuthContextProvider from "./context/Auth";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <RootLayout>
            <AppRoutes />
          </RootLayout>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
