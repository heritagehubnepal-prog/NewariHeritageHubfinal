import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Palette, Image, GraduationCap, Check, Info } from "lucide-react";

export default function DownloadSection() {
  const downloadCategories = [
    {
      icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" /></svg>,
      title: "SVG Characters",
      description: "Scalable vector illustrations of Mincha and Bhincha",
      buttonText: "Download SVG"
    },
    {
      icon: <Image className="w-10 h-10" />,
      title: "PNG Assets", 
      description: "High-resolution PNG files with transparent backgrounds",
      buttonText: "Download PNG"
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "Brand Kit",
      description: "Color palettes, fonts, and brand guidelines", 
      buttonText: "Download Kit"
    },
    {
      icon: <GraduationCap className="w-10 h-10" />,
      title: "Educational",
      description: "Teaching materials and cultural information sheets",
      buttonText: "Download Pack"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Download Character Assets</h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Get high-quality character illustrations and cultural resources for educational and promotional use. 
            All assets are created with cultural sensitivity and respect.
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
