export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[60vh]">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-8">About the School</h1>
        
        <img 
          src="https://images.unsplash.com/photo-1541753866388-0b3c701627d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdHVkZW50cyUyMHBhaW50aW5nfGVufDF8fHx8MTc3OTY0MDQ5N3ww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Students discussing art" 
          className="w-full aspect-video object-cover mb-12 bg-neutral-100"
        />

        <p className="text-xl text-neutral-600 leading-relaxed mb-8">
          The Yale School of Art is a graduate school that confers Master of Fine Arts degrees in Graphic Design, Painting/Printmaking, Photography, and Sculpture.
        </p>
        <p className="text-neutral-600 leading-relaxed mb-6">
          Founded in 1869 as the first professional fine arts school in the United States, the Yale School of Art has a long history of fostering rigorous, discipline-based practice. Our curriculum emphasizes the intensive critique of student work by distinguished faculty and visiting artists.
        </p>
        <div className="bg-neutral-100 p-8 border-l-4 border-black mt-12">
          <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Our Philosophy</h2>
          <p className="text-neutral-700">
            Art is a fundamental force in human experience. The School of Art encourages its students to work across disciplines, developing independent voices while maintaining a critical awareness of their historical and cultural context.
          </p>
        </div>
      </div>
    </div>
  );
}
