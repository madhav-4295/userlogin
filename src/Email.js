import React, { Component } from "react"
import Axios from "axios"
import { Redirect } from "react-router-dom"
import {connect} from "react-redux"

import {Email} from "./action"


class UserEmail extends Component{
    constructor(props){
        super(props)
        this.state={
            redirect: null
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        //console.log(this.state.email)

        Axios.post("https://hiring.getbasis.co/candidate/users/email/",{
            email: this.props.email,
            phoneNumber:this.props.phoneNumber,
            token:this.props.token
        }).then(response=>{
            console.log(response)
            this.setState((state)=>{return{...state,redirect:true}})

        }).catch(err=>{
            console.log(err)
        })
    }
    render(){
        const redr= this.state.redirect
        if(redr!==null){
            //if(redr===true){
                return(<Redirect to={{pathname:"/emailVerification"}}></Redirect>)
            //}
        }
        return(
            <React.Fragment>
            <div>
               

            </div>
                <div className="jumbotron" style={{textAlign:"center"}}>
                <div>
                <h5 style={{color:"Grey"}}>Hi Kindly enter Email Id</h5><br></br>
                    <input value={this.props.email} type="email"  placeholder="Enter Email Id" autoFocus
                     onChange={(event)=>{this.props.setEmail(event.target.value)}}></input>
                     <br></br><br></br>
                    <button type="submit" className="btn btn-primary btn-xs" onClick={this.handleSubmit}>Verify Email</button>
                </div>
                    
                </div>
            </React.Fragment>
        )
    }
}
function mapStateToProps(state){
    //return state.phoneNumber
    return state.AuthReducer
}
const mapDispatchToProps=(dispatch, ownProps)=> ({

    setEmail:(email)=>{
        dispatch(Email(email))
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(UserEmail)