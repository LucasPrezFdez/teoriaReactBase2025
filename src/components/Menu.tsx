import { Link } from "react-router-dom";
import { useUser } from "../hooks/useUser";

function Menu() {
    const {currentUser, logout} = useUser()

    return ( 

    <nav className="">
        <div>{currentUser ? currentUser?.name : 'No estas logueado'}</div>
       <ul className="flex flex-row gap-4 flex-wrap">
            <li><Link to="/Ejem1">Ejem01</Link></li>
            <li><Link to="/Ejem2">Ejem02</Link></li>
            <li><Link to="/Ejem3">Ejem03</Link></li>
            <li><Link to="/Ejem4">Ejem04</Link></li>
            <li><Link to="/Ejem5">Ejem05</Link></li>
            <li><Link to="/Ejem6">Ejem06</Link></li>
            <li><Link to="/Ejem7">Ejem07</Link></li>
            <li><Link to="/Ejem8">Ejem08</Link></li>
            <li><Link to="/Ejem9">Ejem09</Link></li>
            <li><Link to="/Ejem10">Ejem10</Link></li>
            <li><Link to="/Ejem11">Ejem11</Link></li>
            <li><Link to="/Ejem12">Ejem12</Link></li>
            <li><Link to="/Ejem13">Ejem13</Link></li>
            <li><Link to="/Ejem14">Ejem14</Link></li>
            <li><Link to="/Ejem15">Ejem15</Link></li>
            <li><Link to="/Ejem16">Ejem16</Link></li>
            <li><Link to="/Ejem17">Ejem17</Link></li>
            <li><Link to="/Ejem18">Ejem18</Link></li>
            <li><Link to="/Ejem19">Ejem19</Link></li>
            <li><Link to="/Ejem20">Ejem20</Link></li>
            <li><Link to="/Ejem21/44">Ejem21</Link></li>
            <li><Link to="/Ejem22">Ejem22</Link></li>
            <li><Link to="/Ejem23">Ejem23</Link></li>
            <li><Link to="/Ejem24">Ejem24</Link></li>
            <li><Link to="/Ejercicio01">Ejercicio01</Link></li>
            <li><Link to="/Ejercicio02">Ejercicio02</Link></li>
            <li><Link to="/Ejercicio03">Ejercicio03</Link></li>
            <li><Link to="/Ejercicio04">Ejercicio04</Link></li>
            <li><Link to="/Ejercicio05">Ejercicio05</Link></li>
            <li><Link to="/Ejercicio06">Ejercicio06</Link></li>
            <li><Link to="/Ejercicio07">Ejercicio07</Link></li>
            <li><Link to="/Ejercicio08">Ejercicio08</Link></li>
            <li><Link to="/Ejercicio09">Ejercicio09</Link></li>
            <li><Link to="/Ejercicio10">Ejercicio10</Link></li>
            <li><Link to="/Ejercicio11">Ejercicio11</Link></li>
        </ul> 
    </nav>
     );
}

export default Menu;