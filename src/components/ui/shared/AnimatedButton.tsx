
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface AnimatedButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: "default" | "subtle" | "outline";
  size?: "default" | "sm" | "lg";
  externalLink?: boolean;
  className?: string;
}

const AnimatedButton = ({
  text,
  href,
  onClick,
  variant = "default",
  size = "default",
  externalLink = false,
  className = "",
}: AnimatedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    subtle: "bg-primary/10 text-primary hover:bg-primary/20",
    outline: "border border-primary text-primary hover:bg-primary/10",
  };

  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    default: "px-6 py-2.5",
    lg: "text-lg px-8 py-3",
  };

  const baseClasses = `group rounded-full font-medium transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonContent = (
    <>
      <span className="transition-transform duration-300 group-hover:translate-x-[-4px]">
        {text}
      </span>
      <ArrowRight
        className={`ml-2 h-5 w-5 transition-all duration-300 ${
          isHovered ? "translate-x-1 opacity-100" : "opacity-0"
        }`}
      />
    </>
  );

  if (href) {
    if (externalLink) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center ${baseClasses}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {buttonContent}
        </a>
      );
    }
    return (
      <Link
        to={href}
        className={`inline-flex items-center ${baseClasses}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center ${baseClasses}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {buttonContent}
    </button>
  );
};

export default AnimatedButton;
