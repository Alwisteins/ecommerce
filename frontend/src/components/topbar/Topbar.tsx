import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import navMenu from "./navMenu";

export default function Topbar() {
  const navigate = useNavigate();

  return (
    <header className="h-20 p-10 flex items-center justify-between border-b border-slate-300">
      <h1 className="font-extrabold text-3xl text-green-500">ecommerce</h1>
      <nav>
        <ul className="flex space-x-10">
          {navMenu.map((nav) => (
            <li key={nav.name}>
              <a href={nav.path}>{nav.name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="space-x-3">
        <Button name="Login" onClick={() => navigate('/login')} outline={true} />
        <Button name="Register" onClick={() => navigate('/login')} />
      </div>
    </header>
  );
}
