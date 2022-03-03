import React, { Component } from 'react';

class Habit extends Component {
    render() {
        return (
            <li className="habit">
                <span className="habit-name">Reading</span>
                <span className="habit-count">8</span>
                <button className="habbit-button habit-increase">
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habbit-button habit-decrease">
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habbit-button habit-delete">
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;