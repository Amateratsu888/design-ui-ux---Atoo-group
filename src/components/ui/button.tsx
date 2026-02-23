import * as React from "react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, type VariantProps } from "class-variance-authority@0.7.1";

import { cn } from "./utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-[var(--color-primary)] focus-visible:ring-[var(--color-primary)]/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-primary)] text-white hover:bg-[color-mix(in_srgb,var(--color-primary)_90%,white_10%)]",
        destructive:
          "bg-[var(--color-tertiary)] text-white hover:bg-[color-mix(in_srgb,var(--color-tertiary)_80%,var(--color-primary)_20%)]",
        outline:
          "border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-white hover:bg-[color-mix(in_srgb,var(--color-primary)_10%,white_90%)]",
        secondary:
          "bg-[var(--color-secondary)] text-white hover:bg-[color-mix(in_srgb,var(--color-secondary)_90%,white_10%)]",
        ghost:
          "hover:bg-[var(--color-tertiary)] hover:text-[var(--color-primary)]",
        link: "text-[var(--color-primary)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
