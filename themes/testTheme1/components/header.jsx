export default function Header() {
  return (
    <header className="w-full bg-stone-50 px-6 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-base font-medium text-black">
          LEGORA
        </div>
        
        <nav className="flex space-x-16">
          <a href="#" className="text-sm text-gray-600 hover:text-black">
            About
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-black">
            Lawyers
          </a>
          <a href="#" className="text-sm text-gray-600 hover:text-black">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-8">
          <a href="#" className="text-sm text-gray-600 hover:text-black">
            Login
          </a>
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 bg-gray-400 rounded-md"></div>
            <div className="w-6 h-6 bg-gray-400 rounded-md"></div>
          </div>
        </div>
      </div>
    </header>
  );
}