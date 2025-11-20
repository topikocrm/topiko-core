import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full bg-stone-50 px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center space-y-12">
          <h1 className="text-5xl lg:text-6xl font-light leading-tight text-black">
            Legal work,<br />
            without limits.
          </h1>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border max-w-sm">
            <p className="text-base text-gray-700 mb-8">
              Make this an enquiry
            </p>
            
            <div className="space-y-6">
              <input 
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-4 border border-gray-200 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-black"
              />
              <div className="flex items-center justify-between">
                <span className="text-base text-gray-500">All fields</span>
                <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column - Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-96 h-[500px] lg:w-[400px] lg:h-[550px]">
            <Image
              src="https://images.unsplash.com/photo-1594736797933-d0401ba8b4dc?w=600&h=700&fit=crop&crop=face"
              alt="Professional legal consultant"
              fill
              className="object-cover rounded-2xl shadow-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}