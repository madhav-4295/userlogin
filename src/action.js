import * as actions from "./actioncreator"
//Action created for setting Phone number
export function PhoneNumber(phnNumber){
    return{
        type: actions.PHONE_NUMBER,
        payload:{
            phoneNumber:phnNumber
        }
    }
}
//Action created for setting user login state
export function isLoggedIn(status,token){
    return{
        type: actions.IS_LOGGEDIN,
        payload:{
            IS_LOGGEDIN:status,
            TOKEN:token
        }
    }
}
//Action created for setting OTP input
export function otpVerify(otp){
    return{
        type: actions.OTP_VERIFY,
        payload:{
            OTP:otp
        }
    }
}
//Action created for setting redirecting state(not in use)
export function isRedirect(redr){
    return{
        type: actions.REDIR,
        payload:{
            REDR:redr
        }
    }
}
//Action created for setting Email input
export function Email(email){
    return{
        type: actions.EMAIL,
        payload:{
            EMAIL:email
        }
    }
}
//Action created for setting Email verification code input
export function Eotp(Emotp){
    return{
        type: actions.EOTP,
        payload:{
            EOTP:Emotp
        }
    }
}
//Action created for setting first name input

export function firstName(fname){
    return{
        type: actions.FIRST_NAME,
        payload:{
            FNAME:fname
        }
    }
}
//Action created for setting last name input

export function lastName(lname){
    return{
        type: actions.LAST_NAME,
        payload:{
            LNAME:lname
        }
    }
}
//Action created for setting policy acceptance input

export function isChecked(check){
    return{
        type: actions.IS_CHECKED,
        payload:{
            ISCHECKED:check
        }
    }
}