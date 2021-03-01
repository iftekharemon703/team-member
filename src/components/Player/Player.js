import React from 'react';
import './Player.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare , faPhone , faUserPlus , faMapPin } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const {img , name , salary, phone , email , district} = props.player;

    return (
        <div className="player">
            <div className="info">
                <img src={img} alt=""/>
                <h4 className="name">{name}</h4>
                <button className="btn btn-success">$ {salary}</button>
            </div>
            <div className="about">
                <p><FontAwesomeIcon icon={faEnvelopeSquare} /> {email}</p>
                <p><FontAwesomeIcon icon={faPhone} /> {phone}</p>
                <p><FontAwesomeIcon icon={faMapPin} />  {district}</p>
                <button className="btn btn-danger" onClick={ () => props.handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUserPlus} />  Add Team</button>
            </div>
        </div>
    );
};

export default Player;