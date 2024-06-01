import { Outlet, useNavigate } from "react-router-dom"

export default function Navbar({setCaller, current}){
	// "useNavigate" is a custom hook, which means it will return a variable, just like the custom hooks that
	// we create.
	const navigate = useNavigate()

	function handleHomeClick(){
		setCaller(current)
		navigate("/")
	}

	function handleAboutClick(){
		setCaller(current)
		navigate("/about")
	}

	return (
		<>
			<nav className="fixed top-0 right-0 bg-red-400 p-2" >
				<ul>
					<li>
						{/* <Link to="/about" className="text-teal-800" >Go to the <strong>about</strong> page</Link> */}
						<button onClick={ handleAboutClick } >About</button>
					</li>
					<li>
						{/* <Link to="/" className="text-teal-800" >Go to the <strong>Home</strong> page</Link> */}
						<button onClick={ handleHomeClick } >Home</button>
					</li>
				</ul>
			</nav>

			<Outlet />
		</>
	)
}