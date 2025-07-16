import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#characters", label: "Characters" },
    { href: "/heritage", label: "Heritage" },
    { href: "/stories", label: "Stories" },
    { href: "/games", label: "Games" },
  ];

  return (
    <nav className="bg-white shadow-lg border-b-4 border-newari-gold sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-2xl font-bold newari-red cursor-pointer hover:text-red-700 transition-colors">
                Heritage Hub Nepal
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className="newari-brown hover:newari-red px-3 py-2 rounded-md text-sm font-medium transition-colors cursor-pointer">
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link href="#download">
                <Button className="bg-newari-red hover:bg-red-700 text-white">
                  Download
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="newari-brown hover:newari-red"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-newari-beige"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span 
                  className="newari-brown hover:newari-red block px-3 py-2 rounded-md text-base font-medium transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href="#download">
              <Button 
                className="bg-newari-red hover:bg-red-700 text-white w-full mt-2"
                onClick={() => setIsOpen(false)}
              >
                Download
              </Button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
