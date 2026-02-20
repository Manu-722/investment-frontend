import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">ElectroCity</h1>

      <div className="flex gap-6">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/products" className="hover:text-blue-400">Products</Link>
        <Link to="/login" className="hover:text-blue-400">Login</Link>
        <Link to="/register" className="hover:text-blue-400">Register</Link>
      </div>
    </nav>
  )
}