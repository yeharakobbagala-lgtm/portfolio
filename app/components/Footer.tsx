import { personal } from "@/lib/data/personal";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { identity, footer } = personal;

  return (
    <footer className="relative border-t border-white/[0.06] py-12 sm:py-14 px-4 sm:px-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent" />
      <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-mono text-lg font-bold text-white">
            {identity.firstName.toLowerCase()}<span className="text-brand-purple">.online</span>
          </p>
          <p className="text-sm text-muted mt-2 max-w-sm">{footer.tagline}</p>
        </div>

        <div className="text-center sm:text-right text-sm text-muted font-mono">
          <p>© {currentYear} {identity.fullName}</p>
          <p className="text-subtle mt-1.5">{footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
