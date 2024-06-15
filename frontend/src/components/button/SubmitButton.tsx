interface SubmitButtonProps {
  name: string;
  input: { email: string; password: string };
}

export default function SubmitButton(props: SubmitButtonProps) {
  const { name, input } = props;
  const isDisabled = !input.email || !input.password;
  return (
    <button
      type="submit"
      className="w-full p-2 text-white bg-green-500 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed rounded-lg"
      disabled={isDisabled}
    >
      {name}
    </button>
  );
}
