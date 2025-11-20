import { Link } from "react-router-dom";

function Menu() {
    return ( 
    <nav>
        <ul>
            <li>
                <Link to="/Ejem1">Ejem01</Link>
                <Link to="/Ejem2">Ejem02</Link>
                <Link to="/Ejem3">Ejem03</Link>
                <Link to="/Ejem4">Ejem04</Link>
                <Link to="/Ejem5">Ejem05</Link>
                <Link to="/Ejem6">Ejem06</Link>
                <Link to="/Ejem7">Ejem07</Link> 
                <Link to="/Ejem8">Ejem08</Link>
                <Link to="/Ejem9">Ejem09</Link>
                <Link to="/Ejem10">Ejem10</Link>
                <Link to="/Ejem11">Ejem11</Link>
                <Link to="/Ejercicio01">Ejercicio01</Link>
                <Link to="/Ejercicio02">Ejercicio02</Link>
                <Link to="/Ejercicio03">Ejercicio03</Link>
            </li>
        </ul>    
    </nav>
     );
}

export default Menu;