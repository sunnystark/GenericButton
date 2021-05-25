import React from "react";
import styled from "styled-components";

interface Props {
  onClick?: any; 
  disabled?: boolean; 
  loading?: boolean; 
  variant?: string; 
  text?: string; 
  type?: any; 
  className?: string; 
  style?: object; 
  color?: string; 
  icon?: React.ReactNode; 
  
}

const IconDiv = styled.div`
  margin-right: 5px;
  display: flex;
`;

export function Icon({ icon }: { icon: React.ReactNode }) {
  return <IconDiv>{icon}</IconDiv>;
}

const Button: React.FC<Props> = ({
  type,
  className,
  variant,
  loading,
  disabled,
  color,
  icon,
  onClick,
  style,
  text,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick && onClick}
      className={`${
        variant === "secondary" ? "secondary-button" : "primary-button"
      } ${className}`} 
      style={{
        color: color || "",
        ...style,
      }}
      type={type || "button"}
    >
      {loading ? (
        "Loading..."
      ) : (
        <React.Fragment>
          {icon && <Icon icon={icon} />}
          {text}
        </React.Fragment>
      )}
    </button>
  );
};

export default Button;
