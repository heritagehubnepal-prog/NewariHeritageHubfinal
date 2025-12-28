import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Palette, Image, GraduationCap, Check, Info } from "lucide-react";

export default function DownloadSection() {
  const downloadCategories = [
    {
      icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" /></svg>,
      title: "Interactive Booklet",
      description: "A digital interactive experience for offline cultural learning",
      buttonText: "Download PDF"
    },
    {
      icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19Z" /></svg>,
      title: "Mobile Experience",
      description: "Take the full interactive experience on your mobile device",
      buttonText: "Download App"
    },
    {
      icon: <Image className="w-10 h-10" />,
      title: "Character Assets", 
      description: "High-resolution illustrations of Mincha and Bhincha",
      buttonText: "Download Pack"
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Heritage Guide",
      description: "Comprehensive information sheets on Newari traditions",
      buttonText: "Download Guide"
    }
  ];

  const permittedUses = [
    "Educational purposes",
    "Cultural promotion", 
    "Non-commercial projects",
    "Heritage documentation"
  ];

  const requirements = [
    "Credit Heritage Hub Nepal",
    "Respect cultural context",
    "No modifications to characters",
    "Share usage examples with us"
  ];

  return (
    <section id="download" className="py-20 bg-gradient-to-br from-newari-red to-red-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">Take Heritage Home</h2>
          <p className="text-2xl font-semibold mb-4 text-newari-gold">Download Our Interactive Guide</p>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Carry the wisdom of our ancestors in your pocket. Get our comprehensive interactive guide, 
            high-quality character illustrations, and cultural resources for your offline journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {downloadCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <div className="newari-gold mb-4 flex justify-center">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{category.title}</h3>
              <p className="text-red-100 text-sm mb-4">{category.description}</p>
              <Button className="bg-white text-newari-red hover:bg-red-50 transition-colors text-sm">
                {category.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Usage Guidelines */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Usage Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 newari-gold">Permitted Uses</h4>
              <ul className="space-y-2 text-red-100">
                {permittedUses.map((use, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="newari-gold mr-2 w-4 h-4" />
                    {use}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 newari-gold">Requirements</h4>
              <ul className="space-y-2 text-red-100">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center">
                    <Info className="newari-gold mr-2 w-4 h-4" />
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
