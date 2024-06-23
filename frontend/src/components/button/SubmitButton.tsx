import Cookies from "js-cookie";
import { useAuth } from "../../context/Auth";

interface SubmitButtonProps {
  name: string;
  input: { email: string; password: string };
}

export default function SubmitButton(props: SubmitButtonProps) {
  const { setAuth } = useAuth();
  const { name, input } = props;
  const isDisabled =
    !input.email || !input.password || input.password.length < 8;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAuth({ token: true });
    Cookies.set("token", "true", { expires: 1 });
  };

  return (
    <button
      type="submit"
      className="w-full p-2 text-white bg-green-500 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed rounded-lg"
      disabled={isDisabled}
      onClick={handleClick}
    >
      {name}
    </button>
  );
}
