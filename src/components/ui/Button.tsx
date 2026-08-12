import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-8 py-3 text-xs uppercase tracking-[0.22em] transition-all duration-500";
  const styles =
    variant === "primary"
      ? "border border-text/30 bg-text/5 hover:bg-text hover:text-bg"
      : "border border-transparent text-muted hover:text-text";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
