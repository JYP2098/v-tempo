import Image from "next/image";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { width: 120, height: 120 },
  md: { width: 180, height: 180 },
  lg: { width: 260, height: 260 },
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const { width, height } = sizes[size];
  return (
    <Image
      src="/logo.png"
      alt="V TEMPO Custom Timepieces"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
