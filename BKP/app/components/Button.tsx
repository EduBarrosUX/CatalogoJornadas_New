interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export function Button({ 
  variant = 'primary', 
  children, 
  onClick, 
  type = 'button',
  disabled = false,
  className = ''
}: ButtonProps) {
  const baseStyles = "flex items-center justify-center px-[16px] py-[12px] rounded-[4px] transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed";
  
  const variantStyles = {
    primary: "bg-[#fcfc30] hover:bg-[#e5e52b] active:bg-[#d0d026]",
    secondary: "bg-[#e0e9ff] hover:bg-[#ccd9ff] active:bg-[#b8c9ff]"
  };

  const textStyles = "font-['BancoDoBrasil_Titulos:Bold',sans-serif] text-[#465eff] text-[14px] text-center tracking-[0.07px] uppercase leading-[1.125]";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      <span className={textStyles}>
        {children}
      </span>
    </button>
  );
}
