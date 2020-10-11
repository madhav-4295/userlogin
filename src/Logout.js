import React,{Component} from "react"
import { Link } from "react-router-dom"

class Logout extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="jumbotron" style={{textAlign:"center"}}>
                    {/* <nav>
                        <Link to="/logout">Logout</Link>
                        <Link to="profile">Profile</Link>
                    </nav> */}
                 
                    <h6 style={{color:"Grey"}}>You have been successfully Logged Out. Kindly click on the link below to SignIn or SignUp</h6>
                    <a class="navbar-brand" href="/">LogIn</a>


                    
                </div>
            </React.Fragment>
        )
    }
}
export default Logout