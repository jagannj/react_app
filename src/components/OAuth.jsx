// import React from 'react'
// import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
// import { app } from '../firebase'
// import { useDispatch } from "react-redux"
// import { signinSucess } from '../redux/userSlice';
// const OAuth = () => {
//   const dispatch = useDispatch();
//   const handleGoogle = async () => {
//     try {
//       const auth = getAuth(app);
//       const Provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, Provider)

//       console.log("Result===", result);
//       const response = await fetch("http://localhost:3500/api/v1/user/google", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           name: result.user.displayName,
//           email: result.user.email,
//           photo: result.user.photoURL
//         })
//       })

//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`Server error: ${response.status} - ${errorText}`);
//       }
//       const data = await response.json();
//       console.log("Response Data:", data);
//       dispatch(signinSucess(data));
//     } catch (error) {
//       console.log("could not connect with google", error)
//     }
//   }


//   return (
//     <button type='button' onClick={handleGoogle} className='bg-red-700 rounded-lg p-3 text-white hover:opacity-95'>
//       Continue with Google
//     </button>
//   )
// }

// export default OAuth



import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { app } from '../firebase';
import { useDispatch } from "react-redux";
import { signinSucess } from '../redux/userSlice';

const OAuth = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogle = async () => {
    if (isLoading) return; // Prevent multiple clicks
    setIsLoading(true);
    try {
      const auth = getAuth(app);
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      console.log("Result:", result);

      const response = await fetch("http://localhost:3500/api/v1/user/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log("Response Data:", data);
      dispatch(signinSucess(data));
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      alert(`An error occurred: ${error.message}`);
    } finally {
      setIsLoading(false); // Re-enable the button
    }
  };

  return (
    <button
      type='button'
      onClick={handleGoogle}
      className='bg-red-700 rounded-lg p-3 text-white hover:opacity-95'
      disabled={isLoading}
    >
      {isLoading ? 'Loading...' : 'Continue with Google'}
    </button>
  );
};

export default OAuth;
