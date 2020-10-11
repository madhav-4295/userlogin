import React, { Component } from "react"
import Navbar from './Navbar'
import {connect} from "react-redux"
class Profile extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render(){
        return(
            <div>
                <Navbar />
                <h1>Hi {this.props.firstname.toUpperCase()}{this.props.lastname.toUpperCase()}</h1>
            </div>
        )
    }
}
function mapStateToProps(state){
    //return state.phoneNumber
    return state.AuthReducer
}
export default connect(mapStateToProps,)(Profile)