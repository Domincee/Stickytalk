

function Header() {
    return (
        <header>
            <nav>
                <ul className="navlist"> 
                    <li className="logo">
                        <img src="/logo.png" alt="Logo" />
                    </li>

                    <li className="accnt-dropdown">Account
                        <ul className="acc-btns">

                            <li>Profile</li>
                            <li>Settings</li>
                            <li>Logout</li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
