import React, { useRef, useState } from 'react';
import firebase from '../firebase';


const Login = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationId, setverificationId] = useState('');
    const recapcharef = useRef(null)
    const [otp, setOtp] = useState('');
    // const [confirmationResult, setConfirmationResult] = useState(null);

    const handleSendOtp =()=>{
        if (recapcharef.current){
            recapcharef.current.innerHTML ='<div id="recaptcha-container"></div>'
        }

        const varifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{
            size:'invisible'
        })
        firebase.auth().signInWithPhoneNumber(phoneNumber,varifier)
        .then(confirmationResult=>{
            setverificationId(confirmationResult.verificationId)
        })
        .catch(error=>{
            console.error("sending otp error" ,error)
        })
    }

    // const setupRecaptcha = () => {
    //     window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
    //         size: 'invisible',
    //         callback: () => {
    //             console.log('recaptcha resolved..')
    //         }
    //     });
    // };

    // const handleSendOtp = async () => {
    //     try {
    //         setupRecaptcha();

    //         // Ensure the phone number is in E.164 format
    //         const formattedPhoneNumber = `+91${phoneNumber.replace(/\D/g, '')}`;
            
    //         const appVerifier = window.recaptchaVerifier;

    //         signInWithPhoneNumber(auth, formattedPhoneNumber, appVerifier)
    //             .then((result) => {
    //                 setConfirmationResult(result);
    //                 console.log('OTP sent');
    //             })
    //             .catch((error) => {
    //                 console.error('Error sending OTP:', error);
    //             });

    //     } catch (error) {
    //         console.error('Error sending OTP:', error);
    //     }
    // };

    // const verifyOtp = () => {
    //     if (confirmationResult) {
    //         confirmationResult.confirm(otp).then((result) => {
    //             console.log('User signed in successfully:', result.user);
    //         }).catch((error) => {
    //             console.error('Error verifying OTP:', error);
    //         });
    //     }
    // };

    return (
        <div>
            <h2>OTP Verification</h2>
            <div ref={recapcharef}></div>
            <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter phone number"
            />
            <button onClick={handleSendOtp}>Send OTP</button>

            {/* <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
            />
            <button onClick={verifyOtp}>Verify OTP</button> */}
        </div>
    );
};

export default Login;
