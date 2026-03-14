import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { usePageTitle } from "@/hooks/use-page-title";
import branchesData from "@/data/branches.json";

export default function Branches() {
  usePageTitle("Our Branches");

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <PageHeader 
        title="Find a Branch Near You" 
        subtitle="We are expanding our presence to provide quality education closer to your home." 
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {branchesData.map((branch) => (
            <div key={branch.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 flex flex-col">
              
              {/* Map Placeholder */}
              <div className="h-64 bg-slate-200 relative flex items-center justify-center group overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4xKSIvPjwvc3ZnPg==')] opacity-50" />
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform relative z-10">
                  <MapPin size={32} className="text-primary animate-bounce" />
                </div>
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">{branch.name}</h2>
                
                <div className="space-y-5 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={20} className="text-primary" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-slate-900 mb-1">Address</span>
                      <p className="text-slate-600 leading-relaxed text-sm">{branch.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone size={20} className="text-primary" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-slate-900 mb-1">Phone</span>
                      <a href={`tel:${branch.phone.replace(/\s+/g, '')}`} className="text-primary hover:underline text-sm font-medium">{branch.phone}</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock size={20} className="text-primary" />
                    </div>
                    <div>
                      <span className="block text-sm font-semibold text-slate-900 mb-1">Timings</span>
                      <p className="text-slate-600 text-sm">{branch.timings}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-bold text-slate-900 mb-3">Available Courses:</h4>
                  <div className="flex flex-wrap gap-2">
                    {branch.courses.map((course, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-md border border-slate-200">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                   <button className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                      <Navigation size={18} /> Get Directions
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
