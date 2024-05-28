import { useEffect, useState } from "react";
import { useAuthContext } from "@asgardeo/auth-react";

export const Header = () => {

    const { state, signOut, getDecodedIDToken } = useAuthContext();

    const [ isResourcesAllowed, setIsResourcesAllowed ] = useState();

    // Filter the display of Insights section based on the application role.
    useEffect(() => {
        getDecodedIDToken()
            .then((decodedIdToken) => {
                console.log("Decoded ID token", decodedIdToken);
                if (decodedIdToken?.application_roles === "Anime_App_Manager") {
                    setIsResourcesAllowed(true);
                }
            })
            .catch((error) => {
                console.error("Error occurred while decoding the ID token", error);
            });
    }, [getDecodedIDToken, state]);

    return (
        <header>
            <div className='navbar'>
                <div className='center-panel' id='center-panel'>
                    <a href='/home' className='nav active' id='home'>
                        Home
                    </a>
                    <a href='/my-list' className='nav active' id='home'>
                        My List
                    </a>
                    { true && (
                        <a href='/insights' className='nav' id='setting'>
                            Insights
                        </a>
                    ) }
                </div>
                <div className='right-panel'>
                    <a onClick={ () => signOut() } className='nav' id='profile'>
                        Profile
                    </a>
                </div>
            </div>
        </header>
    );
};
