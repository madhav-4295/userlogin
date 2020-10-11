import React, { Component } from "react"
import {Eotp} from "./action"
import Axios from "axios"
import { Redirect } from "react-router-dom"
import {connect} from "react-redux"


class emailVerification extends Component{
    constructor(props){
        super(props)
        this.state={
            redirect: null
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        Axios.post("https://hiring.getbasis.co/candidate/users/email/verify",{
            //phoneNumber:this.state.phoneNumber,
            verificationToken: this.props.eotp,
            token:this.props.token.toString(),
            email:this.props.email
        }).then(response=>{
            console.log(response)
            this.setState((state)=>{return{...state,redirect:true}})
            console.log(this.state.redirect)

            // if(response.data.results.isLogin!==true){
            //     this.setState((state)=>{return{...state,redirect:true}})
            //     console.log("red",this.state.redirect)
            // }else{
            //     this.setState((state)=>{return{...state,redirect:false}})

            // }
        }).catch(err=>{
            console.log(err)
        })
    }
    render(){
        console.log(this.state.redirect)
        const redr = this.state.redirect
        if(redr!==null){
            if(redr===true){
                return(
                    <Redirect to={{pathname:"/Signup"}}></Redirect>
                    )
            }
            
            }
        return(
            <React.Fragment>
                <div className="jumbotron" style={{textAlign:"center"}} >
                
                <div>
                    <input value={this.props.eotp} type="number" maxLength="4" autoFocus placeholder="Enter verification code"
                    onChange={(event)=>{this.props.setOTP(event.target.value)}} ></input>
                    <br></br>
                    <small style={{color:"Grey"}}>Enter verification code sent on your Email Id</small> 
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

    setOTP:(eotp)=>{
        dispatch(Eotp(eotp))
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(emailVerification)
