import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className=" bg-white border-t border-slate-100 text-slate-600">
      <div className=" container mx-auto px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-pink-600 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                DS
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">
                Dev<span className="text-pink-600">Stack</span>
              </span>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-2">
              <a
                href="#github"
                className="text-xs font-semibold text-slate-600 hover:text-pink-600 transition-colors"
              >
                GitHub
              </a>
              <a
                href="#twitter"
                className="text-xs font-semibold text-slate-600 hover:text-pink-600 transition-colors"
              >
                Twitter
              </a>
              <a
                href="#linkedin"
                className="text-xs font-semibold text-slate-600 hover:text-pink-600 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              Product
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-slate-500 hover:text-pink-600 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="text-slate-500 hover:text-pink-600 transition-colors"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-500 hover:text-pink-600 transition-colors"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-slate-500 hover:text-pink-600 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-500 hover:text-pink-600 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="text-slate-500 hover:text-pink-600 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#privacy"
                  className="text-slate-500 hover:text-pink-600 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="text-slate-500 hover:text-pink-600 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 DevStack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="hover:text-slate-600 transition-colors"
            >
              Privacy
            </a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
