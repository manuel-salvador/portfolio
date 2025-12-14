import { EmailIcon, GitHubIcon, LinkedInIcon } from "@/components/icons";
import SocialLinkIcon from "@/components/social-link-icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-slate-800/50 border-t bg-slate-900/30 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Copyright */}
          <p className="order-2 text-slate-500 text-sm md:order-1">
            © {currentYear} Manuel Salvador. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="order-1 flex items-center gap-4 md:order-2">
            <SocialLinkIcon
              href="https://www.linkedin.com/in/manuel-salvador/"
              icon={<LinkedInIcon />}
              size="lg"
            />
            <SocialLinkIcon
              href="https://github.com/manuel-salvador"
              icon={<GitHubIcon />}
              size="lg"
            />
            <SocialLinkIcon
              href="mailto:manu.sacr@hotmail.com"
              icon={<EmailIcon />}
              size="lg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
