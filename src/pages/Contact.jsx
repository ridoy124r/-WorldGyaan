import React from "react";

const Contact = () => {
  const handleFormSubmit = (event) => {
    event.preventDefault(); 

    const formData = new FormData(event.target);

    console.log([...formData.entries()]); 

    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
     
  };



  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>

      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        <form className="flex flex-col space-y-4" onSubmit={handleFormSubmit}>
          
          <input
            name="name"
            type="text"
            placeholder="Enter Your Name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            name="email"
            type="text"
            placeholder="Enter Your Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Type your message..."
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default Contact;
