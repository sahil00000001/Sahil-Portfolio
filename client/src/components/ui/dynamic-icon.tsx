import { HelpCircle, type LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface DynamicIconProps {
  name: string;
  className?: string;
}

export function DynamicIcon({ name, className = "" }: DynamicIconProps) {
  // Try to find the icon dynamically. Fallback to HelpCircle if not found.
  const Icon = (LucideIcons as Record<string, LucideIcon>)[name] || HelpCircle;
  return <Icon className={className} />;
}
