import { Fab } from "react-tiny-fab";
import { useNavigate } from 'react-router-dom';
import { Outlet } from "react-bootstrap-icons";


const FloatingButton = () => {
    const navigate = useNavigate()

    return(
        <Fab  icon={<Outlet/>} onClick={()=> {
            localStorage.removeItem('token')
            navigate("/");
        }}/>
    )
}

export default FloatingButton;