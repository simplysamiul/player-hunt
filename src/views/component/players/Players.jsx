import { useEffect, useState } from "react";
import './Players.css'
import Player from "../player/Player";
import SelectedPlayer from "../selectedPlayer/SelectedPlayer";


const Players = ({credit, setCredit}) => {
    // players data state
    const [players, setPlayers] = useState([]);
    // Available and selected section state
    const [available, setAvailable] = useState(true);
    // players added state
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    // load players data
    useEffect(() => {
        fetch("../../../../public/players.json")
            .then(res => res.json())
            .then(data => setPlayers(data))
            .catch(err => console.log(err))
    }, []);


    // handel player selection
    const handelPlayerAdd = (player) =>{
        const selectedPlayersList = [...selectedPlayers, player];
        setSelectedPlayers(selectedPlayersList);
    }

    return (
        <div className="mt-14 mb-26">
            {/* section header */}
            <div className=" flex items-center justify-between my-6">
                <h1 className="font-bold text-2xl">
                    {available ? "Available Players" : `Selcted Players (${selectedPlayers.length}/6)`}
                </h1>
                <div className="available-btn-container">
                    <button
                        onClick={() => setAvailable(true)}
                        className={`available btn btn-bg ${available === true ? 'btn-bg' : "btn-bg-white"}`}>
                        Available
                    </button>
                    <button
                        onClick={() => setAvailable(false)}
                        className={`selected btn ${available === false ? 'btn-bg' : "btn-bg-white"}`}>
                        Selected
                    </button>
                </div>
            </div>
            {available === true
                ?
                //    load players data
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {
                        players.map((player) => <Player
                            key={player.id}
                            player={player}
                            handelPlayerAdd={handelPlayerAdd}
                            credit={credit}
                            setCredit={setCredit}
                            selectedPlayers={selectedPlayers}
                        />)
                    }
                </div>
                :
                // load seleted data
                <div>
                    {
                        selectedPlayers.map(player => <SelectedPlayer 
                        player={player}
                        key={player.id}
                        />)
                    }
                </div>
            }

        </div>
    );
};

export default Players;