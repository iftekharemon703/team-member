import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare , faPhone , faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {img , name , sallery, phone , email} = props.player;
    return (
        <div className="player">
            <div className="info">
                <img src={img} alt=""/>
                <h3 className="name">{name}</h3>
                <button>${sallery}</button>
            </div>
            <div className="about">
                <p><FontAwesomeIcon icon={faEnvelopeSquare} /> {email}</p>
                <p><FontAwesomeIcon icon={faPhone} /> {phone}</p>
                <button><FontAwesomeIcon icon={faUserPlus} />  follow</button>
            </div>
        </div>
    );
};

export default Player;