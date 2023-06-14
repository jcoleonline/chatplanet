import Button from 'react-bootstrap/Button';

const Navbar = () => {
    return (
        <div className="nav-container">
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                <Button variant="outline-primary">Primary</Button>{' '}
                </form>
            </nav>
        </div>
    );
};

export default Navbar;