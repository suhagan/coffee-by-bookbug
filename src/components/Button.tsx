type ButtonVariant = "primary" | "secondary" | "danger";

interface ButtonProps {
  text: string;
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
}) => {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600",
    secondary:
      "bg-gray-300 hover:bg-gray-400 text-black dark:bg-gray-700 dark:text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg shadow-md transition ${styles[variant]}`}
    >
      {text}
    </button>
  );
};
