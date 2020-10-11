import React, { Component } from "react"
import {firstName,lastName,isChecked} from "./action"
import Axios from "axios"
import { Redirect } from "react-router-dom"
import {connect} from "react-redux"

class signUp extends Component{
    constructor(props){
        super(props)
        this.state={
            redirect: null,
            errMsg:""
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.props.ischecked===true){
            Axios.post("https://hiring.getbasis.co/candidate/users",{
            email: this.props.email,
            phoneNumber:this.props.phoneNumber,
            token:this.props.token,
            firstName:this.props.firstname,
            lastName:this.props.lastname,
            agreeToPrivacyPolicy: this.props.ischecked,
            source:"WEB_APP"

        }).then(response=>{
            console.log(response)
            this.setState((state)=>{return{...state,redirect:true}})

        }).catch(err=>{
            console.log(err)
        })
        }else{
            this.setState({errMsg:"Kindly check the box before submitting"})
        }
        
    
    }
    render(){
        console.log(this.state.redirect)
        var redr = this.state.redirect
        if(redr===true){
            return(
                <Redirect to={{pathname:"/profile"}}></Redirect>
            )
        }
        return(
            <React.Fragment>
                <div className="jumbotron">
                   <div style={{textAlign:"center"}}>
                   <h6>Fill the form to signup</h6>
                   </div>
                        <div className="container" style={{backgroundColor:"white", width:"50%"}}>
                        <form  onSubmit={this.handleSubmit}>
                        <div class="form-group row">
                        <lablel class="col-sm-3 col-form-label">First Name: </lablel>
                        <div class="col-sm-7">
                        <input type="text" value={this.props.firstname} name="firstname" autoFocus
                           onChange={(event)=>{this.props.setFname(event.target.value)}}></input>
                        </div>
                           
                        </div>
                          
                           <div class="form-group row">
                           <label class="col-sm-3 col-form-label">Last Name: </label>
                           <div class="col-sm-7">
                           <input type="text" value={this.props.lastname} name="lastname" 
                           onChange={(event)=>{this.props.setLName(event.target.value)}}></input>
                           </div>
                           
                           </div>
                           <div  class="form-group row">
                           <label class="col-sm-3 col-form-label">Phone Number:</label>
                           <div class="col-sm-7">
                           <input type="text" className="form-control-plaintext" value={this.props.phoneNumber}></input>

                           </div>
                           </div>
                           <div class="form-group row">
                           <label  class="col-sm-3 col-form-label">Email ID: </label>

                               <div class="col-sm-7">
                               <input type="text" className="form-control-plaintext" value={this.props.email}></input>

                               </div>
                           </div>

                           <input type="checkbox" value={this.props.ischecked} 
                           onChange={(event)=>{this.props.setCheck(event.target.checked)}}></input>
                           <label>I hereby agree to the agree to Privacy Policy</label><br></br>
                           <div style={{textAlign:"center"}}>
                           <button className="btn btn-primary btn-xs">Signup</button><br></br>

                           </div>
                           
                           


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

    setFname:(fname)=>{
        dispatch(firstName(fname))
    },
    setLName:(lname)=>{
        dispatch(lastName(lname))
    },
    setCheck:(check)=>{
        dispatch(isChecked(check))
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(signUp)
