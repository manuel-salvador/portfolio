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
      className={`flex ${sizeClasses} items-center justify-center rounded-full border border-[#D7E2EA]/20 text-[#D7E2EA] transition-all duration-300 hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10`}
      href={href}
      rel="noreferrer"
      target="_blank"
    >
      {icon}
    </a>
  );
}
