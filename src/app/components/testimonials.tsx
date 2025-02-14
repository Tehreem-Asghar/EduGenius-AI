

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-gray-800" id="testimonials">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            What Our Users Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how EduGenius AI has transformed learning experiences for students and educators alike.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            quote="EduGenius AI has completely changed how I approach my studies. The personalized learning paths have helped me improve my grades significantly."
            name="Sarah L."
            role="University Student"
      
          />
          <TestimonialCard
            quote="As a teacher, EduGenius AI has been an invaluable tool. It helps me understand my students' needs better and tailor my lessons accordingly."
            name="Mark T."
            role="High School Teacher"
       
          />
          <TestimonialCard
            quote="Implementing EduGenius AI at our institution has led to a 30% increase in student engagement and improved overall academic performance."
            name="Dr. Emily R."
            role="University Dean"
       
          />
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({
 quote,
  name,
  role,

}: {
  quote: string
  name: string
  role: string

}) {
  return (
    <div className="bg-gray-700 rounded-lg p-6">
      <blockquote className="text-gray-300 mb-6">{quote}</blockquote>
      <div className="flex items-center">
        <div>
          <div className="font-semibold text-white">{name}</div>
          <div className="text-sm text-gray-400">{role}</div>
        </div>
      </div>
    </div>
  )
}

