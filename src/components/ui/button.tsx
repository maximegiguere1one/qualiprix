import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-bold ring-offset-background transition-[transform,background-color,box-shadow,border-color] duration-300 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.96] shimmer-button will-change-[transform,background-color]",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] hover:scale-[1.02] rounded-xl shadow-[0_8px_30px_hsl(var(--primary)/0.25)]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-[1.02] rounded-xl",
        outline: "border-2 border-foreground/20 bg-transparent text-foreground hover:bg-foreground hover:text-background hover:scale-[1.02] hover:border-foreground rounded-xl backdrop-blur-sm",
        secondary: "bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-secondary-foreground hover:shadow-[0_0_30px_hsl(var(--secondary)/0.4)] hover:scale-[1.02] rounded-xl shadow-[0_8px_30px_hsl(var(--secondary)/0.25)]",
        ghost: "hover:bg-muted hover:text-foreground rounded-xl",
        link: "text-primary underline-offset-4 hover:underline",
        premium: "relative bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:shadow-[0_0_40px_hsl(var(--secondary)/0.6)] rounded-full overflow-hidden",
      },
      size: {
        default: "h-14 px-8 py-4 text-base",
        sm: "h-10 px-4 py-2",
        lg: "h-16 px-10 py-5 text-lg",
        icon: "h-14 w-14",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
