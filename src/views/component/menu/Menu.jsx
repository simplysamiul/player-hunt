import menuLogo from "../../../assets/logo.png";
import { BsCoin } from "react-icons/bs";

const Menu = ({credit}) => {
    return (
        <div className="flex justify-between items-center py-2">
            <img className="w-[70px]" src={menuLogo} alt="" />
            <div className="flex justify-center items-center list-none">
                <li className="mx-2 text-gray-800"><a href="">Home</a></li>
                <li className="mx-2 text-gray-800"><a href="">Fixture</a></li>
                <li className="mx-2 text-gray-800"><a href="">Teams</a></li>
                <li className="mx-2 text-gray-800"><a href="">Schedules</a></li>
                <div className="ml-6">
                    <p className="flex justify-center items-center border-1 py-1 px-2 rounded-xl border-gray-400 shadow-lg">
                        <span className="mx-1 font-semibold text-sm">{credit}</span>
                        <span className="mx-1 mr-2 font-semibold text-sm">Coin</span>
                        <BsCoin className="text-amber-600 text-md" />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Menu;