import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen } from "lucide-react";

export function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden group">
      {/* Gradient Lines Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Light Hover Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-move-x"></div>
        <div className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-move-y"></div>
      </div>

      {/* Animated Sparkles */}
      <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full mb-8 animate-fade-in z-10">
        <Sparkles className="w-4 h-4 text-blue-400 animate-spin-slow" />
        <span className="text-sm text-blue-400">AI-POWERED LEARNING</span>
      </div>

      {/* Animated Heading */}
      <h1 className="max-w-4xl mx-auto text-3xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-slide-in z-10">
        Revolutionize Your Learning Journey with AI
      </h1>

      {/* Animated Paragraph */}
      <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-8 animate-fade-in-up z-10">
        EduGenius AI adapts to your unique learning style, providing personalized education that evolves with you.
        Experience the future of learning today.
      </p>

      {/* Animated Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up z-10">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105">
          Start Free Trial
          <BookOpen className="ml-2 w-5 h-5" />
        </Button>
        <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/5 transition-all hover:scale-105">
          Watch Demo
        </Button>
      </div>

      {/* Animated Stats */}
      <div className="w-full max-w-4xl mx-auto bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm animate-fade-in-up z-10">
        <div className="grid  md:grid-cols-3 gap-8 text-center">
          <div className="hover:scale-105 transition-transform">
            <div className="font-bold text-3xl text-blue-400 mb-2">500K+</div>
            <div className="text-gray-400">Active Learners</div>
          </div>
          <div className="hover:scale-105 transition-transform">
            <div className="font-bold text-3xl text-purple-400 mb-2">95%</div>
            <div className="text-gray-400">Improved Grades</div>
          </div>
          <div className="hover:scale-105 transition-transform">
            <div className="font-bold text-3xl text-green-400 mb-2">200+</div>
            <div className="text-gray-400">AI-Crafted Courses</div>
          </div>
        </div>
      </div>
    </div>
  );
}








// import { Button } from "@/components/ui/button"
// import { Sparkles, BookOpen } from "lucide-react"

// export function HeroSection() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 bg-gradient-to-b from-gray-900 to-gray-800">
//       <div className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-2 rounded-full mb-8">
//         <Sparkles className="w-4 h-4 text-blue-400" />
//         <span className="text-sm text-blue-400">AI-POWERED LEARNING</span>
//       </div>

//       <h1 className="max-w-4xl mx-auto text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//         Revolutionize Your Learning Journey with AI
//       </h1>

//       <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-8">
//         EduGenius AI adapts to your unique learning style, providing personalized education that evolves with you.
//         Experience the future of learning today.
//       </p>

//       <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//         <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
//           Start Free Trial
//           <BookOpen className="ml-2 w-5 h-5" />
//         </Button>
//         <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/5">
//           Watch Demo
//         </Button>
//       </div>

//       <div className="w-full max-w-4xl mx-auto bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
//         <div className="grid md:grid-cols-3 gap-8 text-center">
//           <div>
//             <div className="font-bold text-3xl text-blue-400 mb-2">500K+</div>
//             <div className="text-gray-400">Active Learners</div>
//           </div>
//           <div>
//             <div className="font-bold text-3xl text-purple-400 mb-2">95%</div>
//             <div className="text-gray-400">Improved Grades</div>
//           </div>
//           <div>
//             <div className="font-bold text-3xl text-green-400 mb-2">200+</div>
//             <div className="text-gray-400">AI-Crafted Courses</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

