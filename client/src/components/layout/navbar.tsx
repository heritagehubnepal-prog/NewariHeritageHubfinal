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
              {navItems.map((item) => {
                const isActive = location === item.href;
                return (
                  <Link key={item.href} href={item.href}>
                    <span className={`px-3 py-2 rounded-md text-sm font-medium transition-all cursor-pointer relative ${
                      isActive 
                        ? "newari-red font-bold" 
                        : "newari-brown hover:newari-red"
                    }`}>
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-active"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-newari-red"
                          initial={false}
                        />
                      )}
                    </span>
                  </Link>
                );
              })}
              <Link href="#download">
                <Button className="bg-newari-red hover:bg-red-700 text-white text-xs px-4 py-2 h-auto whitespace-nowrap">
                  Take Heritage Home — Download Our Interactive Guide
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
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link key={item.href} href={item.href}>
                  <span 
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all cursor-pointer ${
                      isActive 
                        ? "newari-red bg-newari-cream font-bold border-l-4 border-newari-red" 
                        : "newari-brown hover:newari-red hover:bg-newari-beige"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
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
