interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
  className,
}) => {
  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  );
};

export default Button;
