export function Admissions() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 min-h-[60vh]">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase mb-8">Admissions</h1>
        <p className="text-xl text-neutral-600 leading-relaxed mb-12">
          Admission to the Yale School of Art is highly selective. We seek applicants who demonstrate exceptional artistic promise and a strong commitment to rigorous studio practice.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 border-b pb-4">Application Deadlines</h2>
            <ul className="space-y-4 text-neutral-700">
              <li className="flex justify-between items-center bg-neutral-50 p-4">
                <span className="font-bold">Fall 2027 MFA Program</span>
                <span className="text-red-600 font-medium">January 10, 2027</span>
              </li>
              <li className="flex justify-between items-center bg-neutral-50 p-4">
                <span className="font-bold">Financial Aid Application</span>
                <span className="text-neutral-600 font-medium">March 1, 2027</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 border-b pb-4">Requirements</h2>
            <ul className="list-disc pl-5 space-y-2 text-neutral-600">
              <li>Completed online application form</li>
              <li>Non-refundable application fee ($100)</li>
              <li>A comprehensive portfolio of recent work</li>
              <li>Statement of purpose (500 words maximum)</li>
              <li>Three letters of recommendation</li>
              <li>Unofficial academic transcripts</li>
            </ul>
          </section>

          <button className="bg-black text-white px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-neutral-800 transition-colors">
            Start Application
          </button>
        </div>
      </div>
    </div>
  );
}
