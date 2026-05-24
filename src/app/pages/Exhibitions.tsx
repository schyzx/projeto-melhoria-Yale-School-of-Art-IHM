export function Exhibitions() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[60vh]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-4">Exhibitions</h1>
          <p className="text-xl text-neutral-600 max-w-2xl">
            The School of Art maintains three exhibition spaces featuring work by students, faculty, and visiting artists throughout the academic year.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { 
            title: "MFA Thesis Show: Painting", 
            date: "May 1 - May 15, 2026", 
            location: "Green Hall Gallery",
            img: "https://images.unsplash.com/photo-1606819717115-9159c900370b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwZXhoaWJpdGlvbnxlbnwxfHx8fDE3Nzk0NTA1MzR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          },
          { 
            title: "First-Year Exhibition", 
            date: "October 10 - 24, 2026", 
            location: "Edgewood Gallery",
            img: "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdHVkZW50cyUyMHBhaW50aW5nfGVufDF8fHx8MTc3OTY0MDQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080"
          },
          { 
            title: "Faculty Perspectives", 
            date: "January 15 - February 15, 2027", 
            location: "32 Edgewood Avenue Gallery",
            img: "https://images.unsplash.com/photo-1447758902204-48010b87c24d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3VscHR1cmUlMjBzdHVkaW98ZW58MXx8fHwxNzc5NjQwNDk3fDA&ixlib=rb-4.1.0&q=80&w=1080"
          }
        ].map((exhibition, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-[4/3] mb-4 overflow-hidden bg-neutral-100">
              <img src={exhibition.img} alt={exhibition.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="text-sm font-bold uppercase tracking-widest text-neutral-500 mb-2">{exhibition.date}</div>
            <h3 className="text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-blue-600 transition-colors">{exhibition.title}</h3>
            <div className="text-neutral-600">{exhibition.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
