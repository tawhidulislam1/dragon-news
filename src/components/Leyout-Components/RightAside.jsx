import FindUs from "../FindUs";
import LoginAuth from "../LoginAuth";

const RightAside = () => {
    return (
        <div className="space-y-3">
            <LoginAuth></LoginAuth>
            <FindUs></FindUs>
        </div>
    );
};

export default RightAside;