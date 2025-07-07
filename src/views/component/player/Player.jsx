import { FaFlag } from "react-icons/fa";
import "./Player.css";
import { toast } from "react-toastify";

const Player = ({ player, handelPlayerAdd, credit, setCredit, selectedPlayers }) => {
    const { name, img, hand, country, category, age, price } = player;
    // handel player selection
    const playerSelection = (player) => {
        if (selectedPlayers.length < 6) {
                const findPlayer = selectedPlayers.find(item => item.id === player.id)
            if (!findPlayer) {
                if (credit >= price) {
                    toast.success("Player Added Successfully");
                    handelPlayerAdd(player)
                    setCredit(credit - price);
                } else {
                    toast.error("You don't have enough Credit!");
                }
            }else{
                toast.error("Already Selected this player !");
            }
        } else {
            toast.error("Your Player slot filled!");
        }
    };
    return (
        <div className="border-1 border-gray-100 rounded p-2 shadow-sm">
            <img className="w-full h-[160px] object-cover mb-4 rounded-lg" src={img} alt={`${name}-Img`} />
            <h2 className="font-bold text-xl mb-2">{name}</h2>
            <div className="flex justify-between items-center text-gray-500 border-b-1 border-gray-300 pb-2 mb-2">
                <p className="text-sm flex items-center gap-1">
                    <FaFlag />
                    {country}
                </p>
                <p className="text-sm border-1 border-gray-200 rounded-md p-2">{category}</p>
            </div>
            <p className="text-sm text-gray-500 mb-1 capitalize">{hand}</p>
            <p className="text-sm text-gray-500 mb-1">Age: {age}</p>
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500 mb-1 font-bold">Price : {price} $</p>
                <button onClick={() => playerSelection(player)} className="chose-btn">Choose</button>
            </div>
        </div>
    );
};

export default Player;