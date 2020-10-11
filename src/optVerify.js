import React, { Component } from "react"
import {connect} from "react-redux"
import { Redirect } from "react-router-dom"
import {otpVerify,firstName,lastName} from "./action"

import Axios from "axios"

class OTP extends Component{
    constructor(props){
        super(props)
        this.state={
            redirect:null
        }
    }
    componentDidMount(){

    }
    handleSubmit=(event)=>{
        event.preventDefault()
        Axios.post("https://hiring.getbasis.co/candidate/users/phone/verify",{
            phoneNumber:this.props.phoneNumber,
            verificationCode: this.props.otp,
            token:this.props.token
        }).then(response=>{
            console.log(response)
            //console.log(response.data.results.user.firstName)
            
            if(response.data.results.isLogin!==true){
                //this.props.redirect(true)
                this.setState((state)=>{return{...state,redirect:true}})
                console.log("red",this.state.redirect)  



            //     
                 console.log("nahi hai true")  
            }else{
                console.log("hai true")  
                //this.props.redirect(false)

                this.props.setFname(response.data.results.user.firstName)
                this.props.setLname(response.data.results.user.lastName)

                this.setState((state)=>{return{...state,redirect:false}})

            }
        })
    }
    render(){
        console.log(this.props)
        console.log(this.state.redirect)
        const redir = this.state.redirect
        if (redir!==null){
            if(redir!==true){
                console.log("profile")
                return(<Redirect to={{pathname:"/profile",
               }}></Redirect>)
            }else{
                console.log("phone")

                return(<Redirect to={{pathname:"/email",
                }}></Redirect>)
            }
        }
        return(
            <React.Fragment>
            <div className="jumbotron" style={{textAlign:"center"}}>
                <div>
                    <input value={this.props.otp} type="number" maxLength="4" placeholder="Enter OTP" autoFocus
                    onChange={(event)=>{this.props.setOTP(event.target.value)}}></input>

                    <br></br>
                    <small style={{color:"Grey"}}> Enter the OTP send to your Phone</small>
                    <br></br>

                    
                    <button type="submit" className="btn btn-primary btn-xs" onClick={this.handleSubmit}>Verify</button>
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

    setOTP:(otp)=>{
        dispatch(otpVerify(otp))
    },
    setFname:(fname)=>{
        dispatch(firstName(fname))
    }
    ,
    setLname:(lname)=>{
        dispatch(lastName(lname))
    }
    
});
export default connect(mapStateToProps,mapDispatchToProps)(OTP)
//export default OTP