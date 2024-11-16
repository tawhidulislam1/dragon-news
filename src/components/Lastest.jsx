import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Lastest = () => {
    return (
        <div className="flex items-center gap-3 bg-gray-100 p-2">
            <p className="bg-[#D72050] py-1 px-3 text-gray-400  font-poppoin">latest</p>
            <Marquee className="space-x-10" pauseOnHover='true'>
                <Link to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam</Link>
                <Link to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam</Link>
                <Link to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam</Link>
                <Link to='/'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam</Link>
            </Marquee>
        </div>
    );
};

export default Lastest;