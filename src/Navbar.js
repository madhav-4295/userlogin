import React,{Component} from "react"
import { Link } from "react-router-dom"

class NavBar extends Component{
    render(){
        return(
            <React.Fragment>
                    
                    <nav nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/profile">Profile</a>
                    <Link class="navbar-brand" href="/profile" onClick={()=>{
                            window.location.replace('/Logout')
                        }}>Logout</Link>
                       
                    </nav>
                    
                    
                    
                
            </React.Fragment>
        )
    }
}
export default NavBar