import { Link, useNavigate } from "react-router-dom"
import ErrorMessage from "../errorMessage/errorMessage"


const Page404 = () => {
    const navigate = useNavigate()
    return (
    <>
        <ErrorMessage/>
        <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}}>Page doesn't exist</p>
        <Link onClick={() => navigate(-1)} style={{'display': 'block', 'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px', 'marginTop': '30px'}} to="/">Back to main page</Link>
    </>
    )
}


export default Page404