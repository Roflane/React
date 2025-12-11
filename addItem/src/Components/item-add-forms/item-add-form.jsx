import React, { Component } from 'react';
import './item-add.css';

export default class ItemAddForm extends Component {
    render() {
        const onItemAdd = this.props.onItemAdd;
        return (
            <div className="item-add-form">
                <button className="btn btn-outline-secondary" onClick={onItemAdd}>
                    Add Item
                </button>
            </div>
        )
    }
}