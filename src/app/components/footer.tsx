import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center">
        {/* Logo */}
        <div className="text-lg font-semibold sm:hidden block ">  EduGenius AI</div>

        {/* Navigation Links */}
        <nav className="sm:grid  hidden sm:grid-cols-4 space-x-4 mt-4 md:mt-0">
          <Link  href="#features" className="hover:text-blue-400">
            Features
          </Link>
          <Link  href="#how-it-works" className="hover:text-blue-400">
            How It Works
          </Link>
          <Link href="#benefits"className="hover:text-blue-400">
            Benefits
          </Link>
          <Link href="#pricing"className="hover:text-blue-400">
            Pricing
          </Link>
        </nav>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link href="#" className="hover:text-blue-400">
            <i className="fab fa-facebook"></i>
          </Link>
          <Link href="#" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link href="#" className="hover:text-blue-400">
            <i className="fab fa-linkedin"></i>
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-4">
        &copy; {new Date().getFullYear()} EduGenius AI. All rights reserved.
      </div>
    </footer>
  );
};


