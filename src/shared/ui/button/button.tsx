import * as React from "react";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib";
import { buttonVariants } from "./button-variants";

const Button = ({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) => {
  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button };
