import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <div>
                Hello from home
            </div>
            <div>        
                <NavLink to='/about' exact>
                    More about me
                </NavLink>
                <NavLink to='/secured' exact>
                    Secured Dashboard
                </NavLink>
            </div>
        </div>
        )
}

export default Home;