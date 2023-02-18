import {  createUserWithEmailAndPassword, signInWithEmailAndPassword  } from 'firebase/auth';
import { auth } from './firebase_setup/firebase'
import 'firebase/compat/auth';

export const register = async({email, password}) => {
    try {
        const resp = await createUserWithEmailAndPassword(auth, email, password);
        console.log(resp.user);
        alert("Successfully Registered");
        return resp.user;
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            alert('This email is already registered.');
            window.location.reload(false);
        } else {
            alert('Password length error, try again!');
            window.location.reload(false);
        }
    }
}
  
export const login = async({email, password})=>{
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        console.log("user")
        console.log(res.user)
        return res.user;
    } catch (error){
        console.error(error);
        alert('No registered user for this email and password.');
        window.location.reload(false);
    }

}