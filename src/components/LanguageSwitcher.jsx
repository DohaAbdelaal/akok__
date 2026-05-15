import useLang from "../context/useLang";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();
  const switchToLang = lang === "en" ? "عربي" : "EN";

  return (
    <button
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      className="flex items-center gap-2 px-3 py-1 rounded-md text-AkokAccent font-medium hover:bg-green-100 transition-colors duration-200"
      aria-label="Switch language"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        {/* Outer Circle */}
        <circle cx="12" cy="12" r="10" />
        
        {/* Longitudinal Ellipse */}
        <ellipse cx="12" cy="12" rx="4" ry="10" />
        
        {/* Latitudinal Lines */}
        <path d="M2 12h20" />
        <path d="M4.5 7h15" />
        <path d="M4.5 17h15" />
      </svg>

      <span className="text-sm font-semibold text-foreground">
        {switchToLang}
      </span>
    </button>
  );
}