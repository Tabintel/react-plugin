import ClipLoader from "react-spinners/ClipLoader";

export const Button = ({
  label,
  onClick,
  variant,
  isLoading,
  fullWidth,
  small,
  disabled,
}) => {
  const variantClasses = `${
    variant === "secondary"
      ? "bg-gray-600 hover:bg-gray-700"
      : "bg-gray-900 hover:bg-black"
  }`;
  const smallClasses = `${small ? "text-sm py-2 px-3" : "text-base p-4"}`;
  const fullWidthClasses = `${fullWidth ? "w-full" : "w-auto"}`;

  return (
    <button
      className={`flex items-center justify-center rounded text-white disabled:cursor-not-allowed disabled:bg-gray-600 ${variantClasses} ${fullWidthClasses} ${smallClasses} ${
        isLoading ? "cursor-wait" : ""
      }`}
      onClick={onClick}
      disabled={disabled}>
      {isLoading ? <ClipLoader color="#fff" /> : label}
    </button>
  );
};