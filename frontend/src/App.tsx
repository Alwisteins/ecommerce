import { BrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/Root";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <RootLayout>
          <AppRoutes />
        </RootLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
