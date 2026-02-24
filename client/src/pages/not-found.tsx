import { Link } from "wouter";
import { AlertCircle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-destructive/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="glass p-12 rounded-3xl max-w-md w-full text-center border-destructive/20 relative z-10">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center">
            <AlertCircle className="h-10 w-10 text-destructive" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold font-display mb-4">404</h1>
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The trajectory you followed seems to have led into the void. The requested page doesn't exist in this dimension.
        </p>
        
        <Link href="/">
          <button className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-white/10 hover:bg-white/20 border border-white/10 text-white transition-all w-full group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Return to Base
          </button>
        </Link>
      </div>
    </div>
  );
}
