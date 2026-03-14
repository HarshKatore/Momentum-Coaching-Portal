import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, ZoomIn } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { usePageTitle } from "@/hooks/use-page-title";
import galleryData from "@/data/gallery.json";
import { clsx } from "clsx";

export default function Gallery() {
  usePageTitle("Photo Gallery");
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(galleryData.map(item => item.category)))];

  const filteredData = filter === "All" 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <PageHeader 
        title="Life at Momentum" 
        subtitle="Glimpses of our classrooms, events, seminars, and success celebrations." 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={clsx(
                "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                filter === cat 
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredData.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative rounded-2xl overflow-hidden aspect-square bg-slate-200 cursor-pointer shadow-md"
              >
                {item.image ? (
                  <img src={item.image} alt={item.caption} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-110 transition-transform duration-500">
                    <ImageIcon size={48} className="text-slate-400" />
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    <ZoomIn size={20} />
                  </div>
                  <span className="text-primary font-bold text-xs uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {item.category}
                  </span>
                  <p className="text-white font-medium leading-snug translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
