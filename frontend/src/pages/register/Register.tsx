import Form from "../../components/form/Form";

export default function Register() {
  return (
    <div className="h-[87vh] sm:grid grid-cols-2 justify-items-center content-center">
      <div className="hidden sm:flex flex-col justify-center items-center">
        <img src="/register-ilustration.png" alt="register ilustration" />
        <h2 className="text-xl font-semibold">
          online marketplace to buy what you want
        </h2>
        <p className="text-sm">
          Register now and enjoy the feeling of shopping online with us
        </p>
      </div>
      <Form type="Register" />
    </div>
  );
}
