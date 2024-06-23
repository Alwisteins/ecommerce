import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import Navbar from "../navbar/Navbar";
import { useAuth } from "../../context/Auth";

export default function Topbar() {
  const navigate = useNavigate();
  const { auth } = useAuth();

  return (
    <header className="fixed h-20 w-full p-5 sm:p-10 flex items-center justify-between bg-white/80 backdrop-blur-md border-b border-slate-300">
      <h1 className="order-2 sm:order-none font-bold text-2xl sm:font-extrabold sm:text-3xl text-green-500">
        ecommerce
      </h1>
      <div className="sm:block hidden">
        <Navbar />
      </div>
      <div
        className={`${
          auth.token && "hidden"
        } order-3 flex sm:order-none space-x-3`}
      >
        <Button
          name="Login"
          onClick={() => navigate("/login")}
          outline={true}
        />
        <Button name="Register" onClick={() => navigate("/register")} />
      </div>
    </header>
  );
}
