import { MdOutlineDeleteSweep } from "react-icons/md";

const SelectedPlayer = ({ player }) => {
    const { img, name, category } = player;
    return (
        <div className="flex items-center justify-between mb-4 p-4 rounded-xl border-2 border-gray-100">
            <div className="flex items-center gap-2">
                <img className="w-[70px] h-[50px] object-cover rounded" src={img} alt={`${name}-img`} />
                <div>
                    <h2 className="font-semibold text-md mb-1">{name}</h2>
                    <p className="text-sm text-gray-400">{category}</p>
                </div>
            </div>
            <button className="text-red-500 text-xl cursor-pointer">
                <MdOutlineDeleteSweep />
            </button>
        </div>
    );
};

export default SelectedPlayer;