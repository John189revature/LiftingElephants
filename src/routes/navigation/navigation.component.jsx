import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as ElpLogo } from '../../resources/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
    return (
        <Fragment>
            <div className='NavBar'>
                <Link className='logo-container' to='/'>
                    <ElpLogo className='logo' />
                </Link>

                <div className='links-container'>
                    <Link className='nav-link' to='about'>
                        About
                    </Link>
                </div>
                <div className='sign-in-container'>
                    <Link className='nav-link' to='signIn'>
                        Sign In
                    </Link>
                </div>

            </div >
            <Outlet />
        </Fragment >
    );
};
export default Navigation