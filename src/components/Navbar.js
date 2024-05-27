import { Outlet, Link } from "react-router-dom"

export default function Navbar(){
	return (
		<>
			<nav className="fixed top-0 right-0 bg-red-400 p-2" >
				<ul>
					<li>
						<Link to="/about" className="text-teal-800" >Go to the <strong>about</strong> page</Link>
					</li>
					<li>
						<Link to="/" className="text-teal-800" >Go to the <strong>Home</strong> page</Link>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	)
}