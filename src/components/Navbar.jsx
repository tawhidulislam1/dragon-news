import { Link } from "react-router-dom";
import userIcon from '../assets/user.png';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <div className="nav space-x-5">
                <Link to='/'> Home</Link>
                <Link to='/about'> About </Link>
                <Link to='/career'> Career</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div className="user-icon">
                    <img src={userIcon} alt="" />
                </div>
                <button className="btn border-t-neutral-900 rounded border-none">Login</button>
            </div>
        </div>
    );
};

export default Navbar;