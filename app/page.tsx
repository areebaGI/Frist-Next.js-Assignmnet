
export default function Home() {
  return (
    <div className="bg-gray-500 flex items-center justify-center h-screen">
      <div className="flex items-center space-x-8">
        <div className="text-container">
          <span className="font-mono text-blue-900 bg-orange-400 rounded p-2">Digital Consulting Agency</span>
          <h1 className="text-blue-950 font-serif text-5xl mt-4 ">Unique Business Consulting</h1>
          <p className="mt-4">Your text goes here. Provide a brief description or tagline about your business.
            we help our client succeed by creating brand identities , digital experience,and print 
            material.
          </p>
          <button className="border-2 border-blue-900 rounded py-2 px-6 mt-4 text-blue-900 text-center hover:bg-blue-900 hover:text-white">
            About us
          </button>
        </div>
        <img className="w-1/2 h-auto rounded-lg" src="https://cdn.pixabay.com/photo/2024/02/19/09/21/ai-generated-8582949_640.jpg" alt="profile" />
      </div>
    </div>
  );
}