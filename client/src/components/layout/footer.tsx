import { Link } from "wouter";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Characters",
      links: [
        { label: "Meet Mincha", href: "/character/mincha" },
        { label: "Meet Bhincha", href: "/character/bhincha" },
        { label: "Character Stories", href: "/stories" },
        { label: "Cultural Background", href: "/heritage" },
      ]
    },
    {
      title: "Heritage",
      links: [
        { label: "Newari Culture", href: "/heritage" },
        { label: "Festivals", href: "/heritage#festivals" },
        { label: "Architecture", href: "/heritage#architecture" },
        { label: "Traditions", href: "/heritage#traditions" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Download Assets", href: "#download" },
        { label: "Educational Materials", href: "/heritage" },
        { label: "Usage Guidelines", href: "#guidelines" },
        { label: "Contact Us", href: "#contact" },
      ]
    }
  ];

  return (
    <footer className="bg-newari-brown text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold newari-gold mb-4">Heritage Hub Nepal</h3>
            <p className="text-white/80 mb-4 leading-relaxed">
              Preserving and sharing the rich cultural heritage of Nepal through storytelling, 
              education, and community engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:newari-gold transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:newari-gold transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/60 hover:newari-gold transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold newari-gold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-white/80">
                {section.links.map((link, index) => (
                  <li key={`${section.title}-${index}`}>
                    <Link href={link.href}>
                      <span className="hover:text-white transition-colors cursor-pointer">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-4 md:mb-0">
              © 2024 Heritage Hub Nepal. All rights reserved. Created with cultural respect and community input.
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Cultural Guidelines</a>
              <Link href="/admin-guide" className="hover:text-white transition-colors opacity-75">Admin Guide</Link>
              <Link href="/admin/login" className="hover:text-white transition-colors opacity-50">Admin Login</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
