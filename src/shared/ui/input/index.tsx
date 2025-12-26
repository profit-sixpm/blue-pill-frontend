import * as React from "react";
import { cn } from "@/shared/lib";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full shadow-[0px_0px_14px_0px_#1b1b1b14] border border-[#C9C9CB] rounded-[36px] py-5 px-7 text-[18px] outline-none focus:border-[#5978FF] transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
