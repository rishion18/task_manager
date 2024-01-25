import { useEffect } from "react";

const DashBoard = () => {

    useEffect(() => {
// Read the 'access_token' cookie
const accessTokenCookie = document.cookie
  .split('; ')
  .find(cookie => cookie.startsWith('access_token='));

// Read the 'refresh_token' cookie
const refreshTokenCookie = document.cookie
  .split('; ')
  .find(cookie => cookie.startsWith('refresh_token='));

// Extract the values from the cookie strings
const accessToken = accessTokenCookie ? accessTokenCookie.split('=')[1] : null;
const refreshToken = refreshTokenCookie ? refreshTokenCookie.split('=')[1] : null;

// Log the tokens
console.log('Access Token:', accessToken);
console.log('Refresh Token:', refreshToken);

    })


   return(
    <div>DashBoard</div>
   )
}

export default DashBoard;