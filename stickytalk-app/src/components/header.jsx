function Header(){
    return(

        <header>
                <nav>
                    <ul class="navlist">
                     
                       <li class="logo">
                            <img src="../public/logo.png" alt="" />
                       </li>

                        <li class="accnt-dropdown">Account
                            <ul class="acc-btns">
                                <li>Profile</li>
                                <li>Settings</li>
                                <li>Logout</li>
                            </ul>
                       </li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header