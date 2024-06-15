import Form from "../../components/form/Form";

export default function Login() {
  return (
    <div className="h-[87vh] sm:grid grid-cols-2 justify-items-center content-center">
      <Form type="Login" />
      <div className="hidden sm:flex flex-col justify-center items-center">
        <img src="/login-ilustration.png" alt="register ilustration" />
        <h2 className="text-xl font-semibold">
          online marketplace to buy what you want
        </h2>
        <p className="text-sm">
          Login now and enjoy the feeling of shopping online with us
        </p>
      </div>
    </div>
  );
}
