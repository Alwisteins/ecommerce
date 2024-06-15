import { useState } from "react";
import InputField from "./InputField";
import SubmitButton from "../button/SubmitButton";

interface FormProps {
  type: "Register" | "Login";
}

export default function Form(props: FormProps) {
  const { type } = props;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className="py-5 px-10 space-y-3 flex flex-col items-center border-2 border-green-700 rounded-md shadow-xl shadow-slate-200">
      <div className="text-center">
        <h1 className="font-semibold text-xl">{type}</h1>
        <p>
          {type === "Register" ? (
            <>
              Already have an account?{" "}
              <a href="/login" className="text-green-500">
                Login here
              </a>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <a href="/register" className="text-green-500">
                Register here
              </a>
            </>
          )}
        </p>
      </div>
      <form className="space-y-5">
        <div className="space-y-2">
          <InputField
            label="email"
            type="email"
            placeholder="ex. example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            label="password"
            type="password"
            placeholder="ex. !myAccount_34"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <SubmitButton name={type} input={{ email, password }} />
        <div className="m-auto w-10/12 text-center">
          <p className="text-sm">
            By registering, I agree{" "}
            <a href="" className="text-green-500">
              Terms & Conditions
            </a>{" "}
            and{" "}
            <a href="" className="text-green-500">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
