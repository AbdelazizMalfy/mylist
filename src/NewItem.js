import React, { Component } from 'react';
import  uuid from 'uuid/v4';

class NewItem extends Component {
    state = {
        listItem : ''
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.createItem({...this.state, id :uuid()});
        this.setState({ listItem:'' })
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" placeholder="Add a new item" id="listItem" name='listItem' value={this.state.listItem} onChange={this.onInputChange} />
                <button>Add a new item</button>
            </form>
        )
    }
}


export default NewItem;