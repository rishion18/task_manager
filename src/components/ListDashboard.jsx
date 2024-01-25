import { useEffect } from "react";

const DashBoard = () => {

    useEffect(() => {
        const storedAccessToken = localStorage.getItem('access_token');
        const storedRefreshToken = localStorage.getItem('refresh_token');

        console.log({
            'access': storedAccessToken,
            'refresh': storedRefreshToken
        });
    })


   return(
    <div>DashBoard</div>
   )
}

export default DashBoard;