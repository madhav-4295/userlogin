import * as actions from "./actioncreator"

import {combineReducers} from "redux"
//initial state
const AuthState={
    phoneNumber:"",
    isLoggedIN:null,
    email:"",
    token:0,
    otp:null,
    eotp:null,
    redr:null,
    firstname:"",
    lastname:"",
    ischecked:null
    
    
}

function AuthReducer(state=AuthState,action){
    switch(action.type){
        case actions.PHONE_NUMBER:
            console.log(action.payload.phoneNumber)
            console.log(state.phoneNumber)
            return{
                ...state,
                phoneNumber: action.payload.phoneNumber,
                

            };
        case actions.IS_LOGGEDIN:
            return{
                ...state,
                isLoggedIN:action.payload.IS_LOGGEDIN,
                token: action.payload.TOKEN
            }
        case actions.OTP_VERIFY:
            return{
                ...state,
                otp:action.payload.OTP
            }
        case actions.REDIR:
            return{
                ...state,
                redr: action.payload.REDR
            }
        case actions.EMAIL:
            return{
                ...state,
                email: action.payload.EMAIL
            }
            case actions.EOTP:
                return{
                    ...state,
                    eotp: action.payload.EOTP
                }
            
            case actions.FIRST_NAME:
                return{
                    ...state,
                    firstname: action.payload.FNAME
                }
            case actions.LAST_NAME:
                return{
                    ...state,
                    lastname: action.payload.LNAME
                }
            case actions.IS_CHECKED:
                return{
                    ...state,
                    ischecked: action.payload.ISCHECKED
                }
            
            
        default:
            return state
    }
}
export default combineReducers( {AuthReducer})