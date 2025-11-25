import React from 'react'

const Herosection = () => {
  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto  px-4 flex flex-col md:flex-row items-center justify-between gap-10">

     
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug text-gray-900">
            Explore the World,One  <br />
            <span className='text-blue-600'>Country</span> at a Time
          </h1>

          <p className="text-gray-600 text-lg max-w-md mx-auto md:mx-0">
            Discover amazing places, learn about different cultures, and explore 
            countries across the globe with ease.
          </p>

          <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 text-lg shadow mx-auto md:mx-0">
            Start Exploring
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-move-right"
            >
              <path d="M18 8L22 12L18 16"/>
              <path d="M2 12H22"/>
            </svg>
          </button>
        </div>


        <div className="flex-1 mt-10 md:mt-0">
          <img
            src="src/assets/world.png"
            alt="World Map"
            className="w-full max-w-md mx-auto drop-shadow-lg"
          />
        </div>

      </div>
    </main>
  )
}

export default Herosection
