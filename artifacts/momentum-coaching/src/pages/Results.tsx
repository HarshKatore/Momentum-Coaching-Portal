import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Medal } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { usePageTitle } from "@/hooks/use-page-title";
import toppersData from "@/data/toppers.json";
import { clsx } from "clsx";

export default function Results() {
  usePageTitle("Results & Selections");
  const [filter, setFilter] = useState("All");

  const exams = ["All", ...Array.from(new Set(toppersData.map(t => t.exam)))];

  const filteredData = filter === "All" 
    ? toppersData 
    : toppersData.filter(t => t.exam === filter);

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <PageHeader 
        title="Hall of Fame" 
        subtitle="We take pride in the exceptional achievements of our students. Hard work meets right guidance here." 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {exams.map(exam => (
            <button
              key={exam}
              onClick={() => setFilter(exam)}
              className={clsx(
                "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                filter === exam 
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-primary hover:text-primary"
              )}
            >
              {exam}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredData.map((topper, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={topper.id}
              className="bg-white rounded-2xl p-1 shadow-sm hover:shadow-xl transition-shadow border border-slate-200 overflow-hidden group"
            >
              <div className="bg-slate-900 rounded-xl p-6 h-full flex flex-col items-center text-center relative overflow-hidden z-0">
                {/* Background decorative effects */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
                
                {topper.photo ? (
                  <img src={topper.photo} alt={topper.name} className="w-24 h-24 rounded-full border-4 border-slate-800 object-cover mb-4 z-10" />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center border-4 border-slate-700 mb-4 z-10 group-hover:border-primary transition-colors">
                    <Trophy size={40} className="text-amber-400" />
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-white mb-1 z-10">{topper.name}</h3>
                <p className="text-slate-400 text-sm mb-4 z-10">{topper.batch} • {topper.year}</p>
                
                <div className="mt-auto w-full pt-4 border-t border-slate-800/50 flex flex-col items-center z-10">
                  <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2">{topper.exam}</span>
                  <div className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-lg w-full">
                    <Medal size={18} className="text-amber-500" />
                    <span className="font-bold text-amber-500 text-lg">
                      {topper.rank || topper.score}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
