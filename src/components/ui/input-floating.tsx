import * as React from "react";
import { cn } from "@/lib/utils";

interface FloatingInputProps extends React.ComponentProps<"input"> {
  label: string;
}

const FloatingInput = React.forwardRef<HTMLInputElement, FloatingInputProps>(
  ({ className, label, type, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
    };

    return (
      <div className="relative input-glow">
        <input
          type={type}
          className={cn(
            "peer flex h-14 w-full rounded-xl border-2 border-input bg-background/70 backdrop-blur-md px-5 pt-6 pb-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-transparent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:border-primary focus-visible:bg-background focus-visible:shadow-[0_0_25px_hsl(var(--primary)/0.15)] disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 md:text-sm hover:border-primary/60 hover:bg-background/90 hover:shadow-[0_0_15px_hsl(var(--primary)/0.08)] will-change-[border-color,box-shadow]",
            className,
          )}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={label}
          {...props}
        />
        <label
          className={cn(
            "absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground/60 pointer-events-none transition-all duration-200 ease-out",
            (isFocused || hasValue || props.value) && "top-2 translate-y-0 text-xs text-primary font-medium"
          )}
        >
          {label}
        </label>
      </div>
    );
  },
);
FloatingInput.displayName = "FloatingInput";

interface FloatingTextareaProps extends React.ComponentProps<"textarea"> {
  label: string;
}

const FloatingTextarea = React.forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
  ({ className, label, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
    };

    return (
      <div className="relative input-glow">
        <textarea
          className={cn(
            "peer flex min-h-[120px] w-full rounded-xl border-2 border-input bg-background/70 backdrop-blur-md px-5 pt-6 pb-2 text-base ring-offset-background placeholder:text-transparent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 focus-visible:border-primary focus-visible:bg-background focus-visible:shadow-[0_0_25px_hsl(var(--primary)/0.15)] disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-300 md:text-sm hover:border-primary/60 hover:bg-background/90 hover:shadow-[0_0_15px_hsl(var(--primary)/0.08)] will-change-[border-color,box-shadow]",
            className,
          )}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={label}
          {...props}
        />
        <label
          className={cn(
            "absolute left-5 top-4 text-muted-foreground/60 pointer-events-none transition-all duration-200 ease-out",
            (isFocused || hasValue || props.value) && "top-2 text-xs text-primary font-medium"
          )}
        >
          {label}
        </label>
      </div>
    );
  },
);
FloatingTextarea.displayName = "FloatingTextarea";

export { FloatingInput, FloatingTextarea };
