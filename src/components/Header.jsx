import moment from 'moment';
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2  py-2'>
            <div className="logo">
                <img src={logo} alt="" className='w-[300px]'/>
            </div>
            <p className="text-gray-300">Journalism Without Fear or Favour</p>
            <h2>{moment().format('dddd MMMM Do YYYY')}</h2>
        </div>
    );
};

export default Header;