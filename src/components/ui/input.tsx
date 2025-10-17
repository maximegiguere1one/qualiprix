import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="input-glow">
        <input
          type={type}
          className={cn(
            "flex h-14 w-full rounded-xl border-2 border-input bg-background/70 backdrop-blur-md px-5 pr-6 py-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:border-primary focus-visible:bg-background focus-visible:shadow-[0_0_25px_hsl(var(--primary)/0.15)] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 md:text-sm hover:border-primary/60 hover:bg-background/90 hover:shadow-[0_0_15px_hsl(var(--primary)/0.08)]",
            className,
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
