import React from 'react'
import { useAuth } from "../Context/AuthContext";
import QRCode from 'react-qr-code';
import { Image } from '@chakra-ui/react'

const DisplayQR = () => {

    const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn, admin, setAdmin, OTP, setOTP } =
    useAuth();
    // console.log(OTP)
  return (<>
    <div>
        QR
    </div>
     {OTP!=null?<QRCode 
            size={150}
            value={OTP}
            />: null}
            </>
    
  )
}

export default DisplayQR