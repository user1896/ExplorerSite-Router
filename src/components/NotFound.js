import { Link } from "react-router-dom"

export default function NotFound(){
	return (
		<div>
			<h1>Page Not Found</h1>
			<Link to="/" className="text-teal-800" >Go back to the <strong>Home</strong> page</Link>
		</div>
	)
}