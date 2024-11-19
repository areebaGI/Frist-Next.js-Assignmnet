export default async function ContactPgae(){
   await new Promise((resolve)=>{
    setTimeout(resolve,2000);
   })

    return(
      
             
       <div>

    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-8">
        Contact Us
      </h1>

      <form className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            
            className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>

      {/* LinkedIn Link */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Or you can reach me on{' '}
        <a
          href="https://www.linkedin.com/in/areeba-ansari-9b132b2bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-semibold hover:underline"
        >
          LinkedIn
        </a>.
      </p>
    </div>

        </div>
    )}
