import { Link } from "react-router";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541753866388-0b3c701627d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdHVkZW50cyUyMHBhaW50aW5nfGVufDF8fHx8MTc3OTY0MDQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Art students working in a studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 uppercase">
            Create <br className="md:hidden" /> Without <br className="md:hidden" /> Boundaries
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-light text-neutral-200 mb-10">
            A community of artists and designers engaging in critical dialogue, experimentation, and rigorous practice.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/academics"
              className="px-8 py-4 bg-white text-neutral-950 font-medium uppercase tracking-wide text-sm hover:bg-neutral-100 transition-colors w-full sm:w-auto"
            >
              Explore Programs
            </Link>
            <Link
              to="/admissions"
              className="px-8 py-4 bg-transparent border border-white text-white font-medium uppercase tracking-wide text-sm hover:bg-white/10 transition-colors w-full sm:w-auto inline-flex items-center justify-center"
            >
              Apply to Yale <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Quick Links */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight mb-4">Areas of Study</h2>
              <p className="text-neutral-600 max-w-xl">
                The School of Art grants the degrees of Master of Fine Arts (MFA) in four departments.
              </p>
            </div>
            <Link to="/academics" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wide text-sm">
              View all programs <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Graphic Design", img: "https://images.unsplash.com/photo-1609605348579-3123e3d40eb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwdHlwb2dyYXBoeXxlbnwxfHx8fDE3Nzk2NDA1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080", desc: "Typography, interaction, and visual systems." },
              { name: "Painting/Printmaking", img: "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdHVkZW50cyUyMHBhaW50aW5nfGVufDF8fHx8MTc3OTY0MDQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080", desc: "Painting, printmaking, and expanded media." },
              { name: "Photography", img: "https://images.unsplash.com/photo-1575876402495-fe202e1d3732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrcm9vbSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3OTY0MDUwM3ww&ixlib=rb-4.1.0&q=80&w=1080", desc: "Lens-based image making and critique." },
              { name: "Sculpture", img: "https://images.unsplash.com/photo-1447758902204-48010b87c24d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3VscHR1cmUlMjBzdHVkaW98ZW58MXx8fHwxNzc5NjQwNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080", desc: "Materials, space, and time-based works." }
            ].map((program) => (
              <Link key={program.name} to="/academics" className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 mb-4">
                  <img 
                    src={program.img} 
                    alt={program.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="font-bold text-lg uppercase tracking-tight mb-2 group-hover:text-blue-600 transition-colors">{program.name}</h3>
                <p className="text-neutral-500 text-sm">{program.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibitions & News */}
      <section className="py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Featured Exhibition */}
            <div className="lg:col-span-2">
              <div className="mb-10 flex justify-between items-end">
                <h2 className="text-2xl font-bold uppercase tracking-tight">Current Exhibition</h2>
              </div>
              <Link to="/exhibitions" className="group block relative overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1606819717115-9159c900370b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3Nzk0NTA1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Gallery Exhibition" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 border border-t-0 border-neutral-100">
                  <div className="flex items-center text-blue-600 text-sm font-medium mb-3 uppercase tracking-wider">
                    <Calendar size={16} className="mr-2" />
                    May 15 – June 30, 2026
                  </div>
                  <h3 className="text-3xl font-bold mb-4 uppercase tracking-tight group-hover:text-blue-600 transition-colors">MFA Thesis Exhibition 2026</h3>
                  <p className="text-neutral-600 mb-6 max-w-2xl">
                    The culmination of two years of rigorous studio practice. Featuring works from graduating students in Graphic Design, Painting/Printmaking, Photography, and Sculpture.
                  </p>
                  <div className="flex items-center text-neutral-500 text-sm font-medium">
                    <MapPin size={16} className="mr-2" />
                    Green Hall Gallery, 1156 Chapel Street
                  </div>
                </div>
              </Link>
            </div>

            {/* Upcoming Events / Announcements */}
            <div>
              <div className="mb-10 flex justify-between items-end">
                <h2 className="text-2xl font-bold uppercase tracking-tight">Announcements</h2>
              </div>
              <div className="space-y-6">
                {[
                  { date: "May 24", title: "Visiting Artist Lecture: Torkwase Dyson", category: "Lecture" },
                  { date: "May 28", title: "Open Studios Registration Deadline", category: "Deadline" },
                  { date: "Jun 02", title: "Photography Department Critiques Begin", category: "Academic" },
                  { date: "Jun 10", title: "Alumni Mixer at Green Hall", category: "Event" },
                ].map((item, i) => (
                  <div key={i} className="group p-6 bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow flex gap-6">
                    <div className="flex flex-col items-center justify-center text-center shrink-0 w-16">
                      <span className="text-xs uppercase tracking-widest text-neutral-500 font-bold mb-1">{item.date.split(" ")[0]}</span>
                      <span className="text-2xl font-light text-neutral-900 leading-none">{item.date.split(" ")[1]}</span>
                    </div>
                    <div>
                      <span className="inline-block px-2 py-1 bg-neutral-100 text-neutral-600 text-xs font-bold uppercase tracking-widest mb-2">
                        {item.category}
                      </span>
                      <h4 className="font-bold text-neutral-900 group-hover:text-blue-600 transition-colors leading-snug">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors uppercase tracking-wide text-sm mt-8">
                View full calendar <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
