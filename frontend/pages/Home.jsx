import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center">
      
      {/* Content Wrapper */}
      <div className="text-center px-6">
        
        <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-6">
          Todo List App
        </h1>

        <p className="text-indigo-100 text-lg md:text-xl max-w-xl mx-auto mb-10">
          Organize your tasks, boost productivity, and manage your daily goals
          with a simple and powerful todo application.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/login"
            className="px-8 py-3 rounded-xl bg-white text-indigo-600 font-semibold text-lg hover:bg-indigo-100 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-8 py-3 rounded-xl border-2 border-white text-white font-semibold text-lg hover:bg-white hover:text-indigo-600 transition"
          >
            Register
          </Link>
        </div>

      </div>
    </div>
  )
}
