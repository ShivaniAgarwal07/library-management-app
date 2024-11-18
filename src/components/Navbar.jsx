import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <>
            <h1>Navbar</h1>
            <nav>
                <Link to="/">Books</Link>
                <Link to="/members">Members</Link>
                <Link to="/transactions">Transactions</Link>
                <Link to="/import-books">Import Books</Link>



            </nav>
        </>
    )
}
export default Navbar