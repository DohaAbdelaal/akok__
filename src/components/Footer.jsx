import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import logo from "../assets/Logo_gray.webp";
import useLang from "../context/useLang";



export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="bg-Akok-Gray text-white mt-20">
      <div
        className="max-w-6xl mx-auto px-6 py-14 grid gap-10
                   sm:grid-cols-2 md:grid-cols-4"
      >
        {/* Brand */}
        <div className="flex flex-col items-start">
          <img
            src={logo}
            alt="AKOK logo"
            className="h-30 mb-4 object-contain"
          />
          <p className="text-sm text-white/70 leading-relaxed">
            {t.footer.description}
          </p>
        </div>

        {/* Main Links */}
        <div>
          <h4 className="font-semibold mb-3 text-white">{t.footer.titles.pages}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/"
                className="text-white/80 hover:text-AkokAccent transition-colors"
              >
                {t.footer.pages.home}
              </Link>
            </li>
            <li>
              <Link
                to="/Products"
                className="text-white/80 hover:text-AkokAccent transition-colors"
              >
                {t.footer.pages.products}
              </Link>
            </li>
            <li>
              <Link
                to="/Info"
                className="text-white/80 hover:text-AkokAccent transition-colors"
              >
                {t.footer.pages.about}
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 text-white">{t.footer.titles.quickLinks}</h4>
          <ul className="space-y-2 text-sm">
  <li>
    <HashLink
      smooth
      to="/Info#faq"
      className="text-white/80 hover:text-AkokAccent transition-colors"
    >
      {t.footer.links.faq}
    </HashLink>
  </li>

  <li>
    <HashLink
      smooth
      to="/Info#shipping"
      className="text-white/80 hover:text-AkokAccent transition-colors"
    >
      {t.footer.links.shipping}
    </HashLink>
  </li>

  <li>
    <HashLink
      smooth
      to="/Info#privacy"
      className="text-white/80 hover:text-AkokAccent transition-colors"
    >
      {t.footer.links.privacy}
    </HashLink>
  </li>

  <li>
    <HashLink
      smooth
      to="/Info#terms"
      className="text-white/80 hover:text-AkokAccent transition-colors"
    >
      {t.footer.links.terms}
    </HashLink>
  </li>
</ul>

        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-semibold mb-3 text-white">{t.footer.titles.contact}</h4>
          <p className="text-sm text-white/70 mb-4">
            akokcosmetics@gmail.com <br />
            01153934415
          </p>

          <div className="flex gap-4 text-lg">
            <a
              href="https://www.facebook.com/share/1UfJWpLrih/"
              className="text-white/80 hover:text-AkokAccent transition-colors duration-50"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/a.kok_cosmetics?igsh=MXN4M2M1aXdxNzE2aQ=="
              className="text-white/80 hover:text-AkokAccent transition-colors duration-50"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@akok.cosmetics?_r=1&_t=ZS-930bel3wTq9"
              className="text-white/80 hover:text-AkokAccent transition-colors duration-50"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 text-center py-4 text-sm text-white/50">
        {t.footer.rights}
      </div>
    </footer>
  );
}

