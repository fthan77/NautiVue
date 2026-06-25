import { Link } from 'react-router-dom';
import { Waves, Map, Compass, Heart, Mail, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ocean-950 border-t border-ocean-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-6 h-6 text-teal-400" />
              <span className="text-lg font-bold text-white">
                Nauti<span className="text-teal-400">Vue</span>
              </span>
            </div>
            <p className="text-ocean-300 text-sm leading-relaxed max-w-xs">
              Discover Indonesia's most beautiful underwater destinations.
              Your interactive guide to diving, snorkeling, and marine exploration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home', icon: Waves },
                { to: '/explore', label: 'Explore Map', icon: Map },
                { to: '/recommendation', label: 'Recommendations', icon: Compass },
              ].map(({ to, label, icon: Icon }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="flex items-center gap-2 text-ocean-300 hover:text-teal-400 text-sm transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="space-y-2">
              <a
                href="mailto:info@nautivue.com"
                className="flex items-center gap-2 text-ocean-300 hover:text-teal-400 text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@nautivue.com
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-ocean-300 hover:text-teal-400 text-sm transition-colors"
              >
                <Globe className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-ocean-800 text-center">
          <p className="text-ocean-400 text-sm flex items-center justify-center gap-1">
            Built with <Heart className="w-4 h-4 text-coral-500 fill-coral-500" /> for ocean lovers
          </p>
        </div>
      </div>
    </footer>
  );
}
