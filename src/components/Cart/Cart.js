import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const name = cart.reduce((name, player) => name + player.name , '');
    const total = cart.reduce((total , player) => total + player.salary , 0);
    return (
        <div className="pt-5">
            <h2 className="text-center">My Player</h2>
            <br/>
            <h6>Selected Player: {cart.length}</h6>
            <h6>Name: {name}</h6>
            <h6>Total Salary: {total}</h6>
        </div>
    );
};

export default Cart;