import * as React from "react";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "./button";

type SubmitState = "idle" | "loading" | "success" | "error";

interface ButtonSubmitProps extends ButtonProps {
  submitState?: SubmitState;
  successMessage?: string;
  errorMessage?: string;
}

const ButtonSubmit = React.forwardRef<HTMLButtonElement, ButtonSubmitProps>(
  ({ 
    className, 
    children, 
    submitState = "idle", 
    successMessage = "Envoyé!",
    errorMessage = "Erreur",
    disabled,
    ...props 
  }, ref) => {
    const [showMessage, setShowMessage] = React.useState(false);

    React.useEffect(() => {
      if (submitState === "success" || submitState === "error") {
        setShowMessage(true);
        const timer = setTimeout(() => setShowMessage(false), 3000);
        return () => clearTimeout(timer);
      }
    }, [submitState]);

    const renderContent = () => {
      if (submitState === "loading") {
        return (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Envoi en cours...</span>
          </>
        );
      }

      if (submitState === "success" && showMessage) {
        return (
          <>
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span>{successMessage}</span>
          </>
        );
      }

      if (submitState === "error" && showMessage) {
        return (
          <>
            <XCircle className="w-5 h-5 text-red-500 animate-[shake_0.3s_ease-in-out]" />
            <span>{errorMessage}</span>
          </>
        );
      }

      return children;
    };

    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          submitState === "success" && "bg-green-600 hover:bg-green-700",
          submitState === "error" && "bg-red-600 hover:bg-red-700 animate-[shake_0.3s_ease-in-out]",
          className
        )}
        disabled={disabled || submitState === "loading" || submitState === "success"}
        {...props}
      >
        {/* Success ripple effect */}
        {submitState === "success" && (
          <span className="absolute inset-0 bg-green-500/30 animate-[ripple_0.6s_ease-out]"></span>
        )}
        
        {/* Error shake effect backdrop */}
        {submitState === "error" && (
          <span className="absolute inset-0 bg-red-500/20"></span>
        )}

        <span className="relative z-10 flex items-center gap-2 justify-center">
          {renderContent()}
        </span>
      </Button>
    );
  },
);
ButtonSubmit.displayName = "ButtonSubmit";

export { ButtonSubmit };
