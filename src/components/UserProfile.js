import { useParams } from "react-router-dom"

export default function UserProfile(){
	// the useParams() hook returns an object that has the parameters sent in the URL, one of those parameters
	// is "username" that we send, so we can destructure the returened object like this to get the value of the 
	// parameter that we want:
	const {username} = useParams()
	
	return (
		<>
			<h1>param sent in the url is: {username} </h1>
		</>
	)
}
// To render a user profile page we need to fetch the user data from the database.
// Now with the help of the param sent in the URL we can change the fetch request everytime, so this UserProfile
// component will render dynamicaly a user based on the param in the URL.