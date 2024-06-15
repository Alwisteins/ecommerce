interface ButtonProps {
  name: string;
  outline?: boolean;
  onClick: () => void;
}

const outlineStyle = `bg-white text-green-500 border border-green-500`;
const defaultStyle = `bg-green-500 text-white`;

export default function Button(props: ButtonProps) {
  const { name, outline, onClick } = props;
  return (
    <button
      className={`${
        outline ? outlineStyle : defaultStyle
      } sm:block px-3 py-2 sm:px-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium focus:outline-none focus:ring focus:ring-green-300`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}
