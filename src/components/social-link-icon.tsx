export default function SocialLinkIcon({
  href,
  icon,
  size = "sm",
}: {
  href: string;
  icon: React.ReactNode;
  size?: "sm" | "lg";
}) {
  const sizeClasses = size === "sm" ? "h-8 w-8 p-1.5" : "h-12 w-12 p-3";
  return (
    <a
      className={`flex ${sizeClasses} items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/20 hover:text-cyan-400`}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {icon}
    </a>
  );
}
