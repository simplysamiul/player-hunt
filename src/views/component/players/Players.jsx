import { useEffect, useState } from "react";
import './Players.css'
import Player from "../player/Player";


const Players = () => {
    // load players data
    const [players, setPlayers] = useState([]);
    useEffect(() =>{
        fetch("../../../../public/players.json")
        .then(res => res.json())
        .then(data => setPlayers(data))
        .catch(err => console.log(err))
    },[]);

    return (
        <div className="mt-14 mb-26">
            {/* section header */}
            <div className=" flex items-center justify-between my-6">
                <h1 className="font-bold text-2xl">Available Players</h1>
                <div className="available-btn-container">
                    <button className="available btn btn-bg">Available</button>
                    <button className="selected btn">Selected</button>
                </div>
            </div>
            {/* players data */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    players.map((player) => <Player
                    key={player.id}
                    player={player}
                    />)
                }
            </div>
        </div>
    );
};

export default Players;