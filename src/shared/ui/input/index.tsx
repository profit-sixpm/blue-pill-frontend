import * as React from "react";
import { cn } from "@/shared/lib";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="w-full justify-between items-center">
        <input
          type={type}
          className={cn(
            (className =
              "w-full shadow-[0px_0px_12px_0px_#1b1b1b14] border border-[#c9c9cb] rounded-[32px] py-4 px-6 flex items-center justify-around outline-none"),
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
