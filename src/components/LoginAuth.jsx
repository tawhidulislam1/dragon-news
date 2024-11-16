import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginAuth = () => {
    return (
        <div>
            <h2 className="font-semibold"> Login With</h2>
            <div className="*:w-full space-y-2">
                <button className="btn"><FaGoogle />Sign With Google</button>
                <button className="btn"><FaGithub />Sign With GitHub</button>
            </div>
        </div>
    );
};

export default LoginAuth;