import { Link } from "react-router-dom";

function Menu() {
    return ( 
    <nav>
        <ul>
            <li>
                <Link to="/Ejem1">Ejem01</Link>
                <Link to="/Ejem2">Ejem02</Link>
                <Link to="/Ejem3">Ejem03</Link>
            </li>
        </ul>    
    </nav>
     );
}

export default Menu;