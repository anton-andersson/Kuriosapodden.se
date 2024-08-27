import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="header">
                <h1>KURIOSA</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">Om oss</Link>
                <Link to="/episodes">Avsnitt</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;