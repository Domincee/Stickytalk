    import logo from '../assets/logo.png';
    import icons from '../assets/icons';

    import '../css/header.css'
    function Header(){
        return(
            <nav >
                <ul className='navlist'>
                    <li></li>                
                    <li className='logo'>
                       <a href="#"> <img src={logo} alt="" /></a>
                    </li>

                    <li className='acc-dropdown'>
                        <img src={icons.user} alt="" />
                        <ul className='list-btn-acc'>
                            <li id='profile'><img src={icons.user1} alt="" /></li>
                            <li id='setting'><img src={icons.setting} alt="" /></li>
                            <li id='logout'><img src={icons.logout} alt="" /></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        )



    }

    export default Header