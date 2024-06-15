interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLFormElement>) => void;
}

export default function InputField(props: InputFieldProps) {
  const { label, type, placeholder, value, onChange } = props;
  return (
    <div className="flex flex-col space-y-1">
      <label htmlFor={label.toLowerCase()} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="border border-slate-400 rounded-lg p-2"
      />
    </div>
  );
}
