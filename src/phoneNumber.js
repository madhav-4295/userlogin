import Axios from "axios"
import React,{Component} from "react"
import {connect} from "react-redux"
import { Redirect } from "react-router-dom"
import {PhoneNumber, isLoggedIn} from "./action"
//import {isLoggedIn} from "./action"

class Phone extends Component{
    handleSubmit=(e)=>{
        e.preventDefault()
        Axios.post("https://hiring.getbasis.co/candidate/users/phone",{
            phoneNumber:this.props.phoneNumber
        }).then(response=>{
             console.log(response)
            // console.log(response.data.results)
            // console.log(this.state.redirectState)
            this.props.setLogin(response.data.results.isLogin,response.data.results.token)
            //this.setState((state)=>{return{...state,isLogin:response.data.results.isLogin, token:response.data.results.token}})
            //console.log(this.state)
        }).catch(err=>{
            console.log(err)
        })
    }
    render(){
        //console.log(this.props)
        var redr= this.props.isLoggedIn
        if(this.props.isLoggedIN!==null){
            return(
                <Redirect to={{pathname:"/OTPverfiy"}}
                //state:{
                 //   isLogin:this.state.isLogin,token:this.state.token, phoneNumber:this.state.PhNumber
                //}}}
                ></Redirect>
            )
            }
        return(
            <React.Fragment>
            
                 <div style={{textAlign:"center"}} className="jumbotron">
                    <div className="container">
                        <h2 style={{color:"Grey"}} >Enter Phone Number </h2>
                    </div>
                    <div >
                    <form onSubmit={this.handleSubmit} className="form-group">
                        <input maxLength="10" type="tel" name="phNumber" autoFocus
                        value={this.props.phoneNumber} onChange={(event)=>{this.props.setNumber(event.target.value)}} placeholder="Enter Phone Number"></input>
                        <br></br>
                        <br></br>
                        <button className="btn btn-primary btn-xs" type="submit">Submit</button>
                    </form>
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

    setNumber:(phoneNumber)=>{
        dispatch(PhoneNumber(phoneNumber))
    },
    setLogin:(isloggedIn,token)=>{
        dispatch(isLoggedIn(isloggedIn,token))
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(Phone)
//export default Phone