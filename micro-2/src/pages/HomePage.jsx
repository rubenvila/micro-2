import { useEffect } from 'react';
import {Link, useLocation, useNavigate, useUser} from 'react-router-dom'


export default function HomePage() {
    const location = useLocation();
    const navigate = useNavigate();

    const user = useUser()

    useEffect(() => {
        if (!user.isLogged) {
            navigate('/login');
        } else {
            navigate('/login');
        }
    }, [navigate,user]);

    return (
        <div>
            <div>Home Page: {location.pathname}</div>
            <Link to="/login">Iniciar Sesión</Link>
        </div>
    )
}