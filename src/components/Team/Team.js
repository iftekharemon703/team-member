import React, { useState } from 'react';
import data from '../../data/data.json';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import './Team.css';

const Team = () => {
    const [player , setPlayer] = useState(data);
    const [cart , setCart] = useState([]);

    const handleAddPlayer = (player) => {
      const newCart = [...cart , player];
      setCart(newCart);
    }

    return (
        <div className="team-container">
            <div className="player-container">
              {
                data.map(player => <Player
                  handleAddPlayer = {handleAddPlayer}
                   player={player}
                   ></Player>)
              }
            </div>
            <div className="cart">
              <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Team;