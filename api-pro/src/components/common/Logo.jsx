import { Code, Zap } from "lucide-react";

const Logo = ({ className = "", showText = true, size = "md" }) => {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10", 
    lg: "h-12 w-12"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon */}
      <div className="relative">
        <div className={`${sizeClasses[size]} bg-brand-orange rounded-lg flex items-center justify-center relative overflow-hidden`}>
          <Code className="h-5 w-5 text-white z-10" />
          <Zap className="h-3 w-3 text-white/70 absolute top-1 right-1" />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange to-brand-orange/80"></div>
        </div>
        {/* Glow effect */}
        <div className={`${sizeClasses[size]} bg-brand-orange/20 rounded-lg absolute inset-0 blur-md -z-10`}></div>
      </div>
      
      {/* Company Name */}
      {showText && (
        <div className={`font-bold ${textSizeClasses[size]} text-foreground`}>
          <span className="text-foreground">API</span>
          <span className="text-brand-orange ml-1">PRO</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
