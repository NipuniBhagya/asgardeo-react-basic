export const Header = () => {
    return (
        <header>
            <div className='navbar'>
                {/* <div className='left-panel'>
                        <div onClick={() => navigate(AppConstants.getPaths().get("HOME"))}>
                            <img alt='react-logo' src={ASGARDEO_LOGO} className='asgardeo-logo-image-small' />
                        </div>
                    </div> */}
                <div className='center-panel' id='center-panel'>
                    <a href='/home' className='nav active' id='home'>
                        Home
                    </a>
                    <a href='/settings' className='nav' id='setting'>
                        Settings
                    </a>
                </div>
                <div className='right-panel'>
                    {/* <a href='/profile'>{state?.displayName ?? state?.username}</a> */}
                    <a href='/profile' className='nav' id='profile'>
                        Profile
                    </a>
                </div>
            </div>
        </header>
    );
};
