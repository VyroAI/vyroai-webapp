type FormInputProps = {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: any;
};

export default function FormInput({
  name,
  type,
  placeholder,
  value,
  onChange,
}: FormInputProps) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="sr-only">
        Username
      </label>
      <input
        id={name}
        required={true}
        type={type}
        className="w-full px-3 py-2 dark:bg-[#1C1D1C] dark:text-black bg-[#F1ECEC] rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
