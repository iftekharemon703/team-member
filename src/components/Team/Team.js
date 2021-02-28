import React, { useState } from 'react';
import data from '../../data/data.json';
import Player from '../Player/Player';
import './Team.css';

const Team = () => {
    const [player , setPlayer] = useState(data);
    console.log(data);
    return (
        <div className="container">
            <div className="player-container">
              {
                data.map(player => <Player player={player}></Player>)
              }
            </div>
            <div className="cart">
              <h3>Cart</h3>
            </div>
        </div>
    );
};

export default Team;