export function Academics() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[60vh]">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-8">Academics</h1>
      <p className="text-xl text-neutral-600 leading-relaxed mb-16 max-w-3xl">
        The School of Art offers a two-year Master of Fine Arts degree program in four areas of study. Each program is designed to provide intensive studio practice supported by rigorous critical dialogue.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          { name: "Graphic Design", desc: "Focuses on the development of a cohesive, investigative body of work, supported by core studios in typography, interaction, and history." },
          { name: "Painting/Printmaking", desc: "Provides a context for individual development through an environment of rigorous critique and dialogue, embracing diverse approaches to image-making." },
          { name: "Photography", desc: "Emphasizes a broad definition of photography as a lens-based medium. The program centers on the critique panel, where students present work to faculty and peers." },
          { name: "Sculpture", desc: "Encourages a wide range of materials and conceptual approaches, from traditional object-making to installation, performance, and time-based media." }
        ].map(dept => (
          <div key={dept.name} className="border border-neutral-200 p-8 hover:border-black transition-colors">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">{dept.name}</h2>
            <p className="text-neutral-600 mb-6">{dept.desc}</p>
            <button className="text-sm font-bold uppercase tracking-widest text-blue-600 hover:text-blue-800">Explore Department &rarr;</button>
          </div>
        ))}
      </div>
    </div>
  );
}
