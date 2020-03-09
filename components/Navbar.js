import Link from './Link'

const Navbar = () => {
    return <div>
        <nav>
            {/* burgerbar at some point
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            */}

            <div>
                <ul className="navbar-container">
                    <li className="nav-item">
                        <Link href="/"><a className="nav-link /">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about"><a className="nav-link /about">About</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/contact"><a className="nav-link /contact">Contact</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
        <style jsx>{`
            .navbar-container {
                display: flex;
                flex-direction: row;   
            }
            
            .nav-item {
                margin: 5px;
                list-style: none;
            }
            
            .active {
                border: 1px solid red;
                font-style: italic;
            }
        `}</style>
    </div>
}

export default Navbar