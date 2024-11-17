const NavBar = ( {user} ) => {
    return(
        <>
        {
            user ? (
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="">Sign Out</Link></li>
                    </ul>
                </nav>
            ):(
                <nav>
                    <ul>
                        <li><Link to="/signin">Sign In</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </ul>
                </nav>
            )
        }
            <h1>Hello World!</h1>
        </>
    )
}

export default NavBar