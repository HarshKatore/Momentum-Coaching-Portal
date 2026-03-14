import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, GraduationCap, Users, Trophy, BookOpen, Star, MapPin, Award, Phone, MessageCircle } from "lucide-react";
import { SITE, CONTACT } from "@/config/siteConfig.js";
import { usePageTitle } from "@/hooks/use-page-title";
import coursesData from "@/data/courses.json";
import facultyData from "@/data/faculty.json";
import toppersData from "@/data/toppers.json";
import testimonialsData from "@/data/testimonials.json";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function Home() {
  usePageTitle("Home");

  // Take subset of data for homepage
  const featuredCourses = coursesData.slice(0, 3);
  const featuredToppers = toppersData.slice(0, 4);
  const featuredFaculty = facultyData.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-950">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Abstract Background" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-foreground mb-6 backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                </span>
                <span className="text-sm font-medium tracking-wide uppercase">Admissions Open 2025-26</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                Shape Your Future With <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-300% animate-gradient">
                  {SITE.instituteName}
                </span>
              </h1>
              
              <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                {SITE.tagline}. Warora's premier coaching institute for JEE Main & Advanced, NEET, and MHT-CET.
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/courses" className="px-8 py-4 rounded-xl font-bold bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                  Explore Courses <ArrowRight size={20} />
                </Link>
                <Link href="/contact" className="px-8 py-4 rounded-xl font-bold bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300">
                  Contact Us
                </Link>
              </div>
            </motion.div>
            
            {/* Stats Row */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/10"
            >
              {[
                { label: "Expert Faculty", value: "10+", icon: Users },
                { label: "Selections", value: "500+", icon: Trophy },
                { label: "Study Material", value: "Complete", icon: BookOpen },
                { label: "Branches", value: SITE.branches, icon: MapPin },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div key={i} className="flex flex-col gap-2">
                    <Icon className="text-accent w-8 h-8 mb-2" />
                    <span className="text-3xl font-bold text-white">{stat.value}</span>
                    <span className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Momentum?</h2>
            <p className="text-muted-foreground text-lg">We don't just teach; we mentor students to achieve their highest potential through a structured, result-oriented approach.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Experienced Faculty", desc: "Learn from subject matter experts with years of experience in competitive exams." },
              { title: "Comprehensive Material", desc: "Well-researched, up-to-date study modules covering NCERT and advanced topics." },
              { title: "Regular Assessments", desc: "Weekly mock tests and detailed performance analysis to track progress." },
              { title: "Doubt Clearing", desc: "Dedicated 1-on-1 sessions to ensure conceptual clarity for every student." },
              { title: "Personalized Mentoring", desc: "Individual attention to guide students through academic and psychological challenges." },
              { title: "Proven Track Record", desc: "Consistent top ranks in JEE and NEET year after year." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-24 bg-slate-50 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Top Programs</h2>
              <p className="text-muted-foreground text-lg">Specialized batches designed to target specific competitive examinations.</p>
            </div>
            <Link href="/courses" className="inline-flex items-center font-semibold text-primary hover:text-primary/80 gap-2 shrink-0">
              View All Courses <ArrowRight size={18} />
            </Link>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredCourses.map(course => (
              <motion.div key={course.id} variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-md border border-border/50 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl" role="img" aria-label="icon">{course.icon}</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wide">
                    {course.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{course.name}</h3>
                <p className="text-primary font-medium mb-4">{course.targetExam} • {course.duration}</p>
                
                <ul className="space-y-3 mb-8 flex-grow">
                  {course.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link href="/contact" className="w-full py-3 rounded-xl border-2 border-primary/20 text-primary text-center font-bold hover:bg-primary hover:text-white transition-colors mt-auto">
                  Enquire Now
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hall of Fame Preview */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Hall of Fame</h2>
            <p className="text-slate-400 text-lg">Celebrating the remarkable achievements of our students.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredToppers.map((topper, i) => (
              <motion.div 
                key={topper.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 rounded-2xl p-6 border border-slate-800 flex flex-col items-center text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="w-24 h-24 rounded-full bg-slate-800 flex items-center justify-center mb-4 border-4 border-slate-800 group-hover:border-primary transition-colors">
                  <Award size={40} className="text-accent" />
                </div>
                
                <h3 className="text-xl font-bold mb-1">{topper.name}</h3>
                <p className="text-primary font-medium text-sm mb-3">{topper.exam}</p>
                
                <div className="mt-auto inline-block px-4 py-2 bg-slate-800 rounded-lg text-lg font-bold text-accent">
                  {topper.rank || topper.score}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
             <Link href="/results" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors font-medium gap-2">
                View All Results <ArrowRight size={18} />
             </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4yKSIvPjwvc3ZnPg==')] opacity-30" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to start your preparation?</h2>
          <p className="text-primary-foreground/90 text-xl max-w-2xl mx-auto mb-10">
            Join Momentum Coaching today and take the first step towards your dream college.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-xl font-bold bg-white text-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Book a Free Counseling Session
            </Link>
            <a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`} className="px-8 py-4 rounded-xl font-bold border-2 border-white text-white hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Phone size={20} /> Call {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
