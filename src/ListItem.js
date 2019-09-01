import React, { Component } from 'react'

class ListItem extends Component {
    state = {
        isEditing: false,
        item:this.props.listItem
    }
    onDeleteClick = () => {
        this.props.remove(this.props.item.id);
    }
    
    onEditClick = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }

    ofEditFormSubmit = (e) => {
        e.preventDefault();

        this.props.update(this.props.item.id,this.state.item);
        this.setState({isEditing: !this.state.isEditing})

    }

    onEditInputChange = (e) => {
        this.setState({ [e.target.name] : e.target.value })
    }

    render() {
        let result;
        if(this.state.isEditing) {
            result =(
                <div>
                    <form onSubmit={this.ofEditFormSubmit}>
                        <input type='text' value={this.state.item} name="item" onChange={this.onEditInputChange}/>
                        <button type='submit'>save</button>
                    </form>
                </div>
            )
        }else {
            result =( 
                <div>
                <ol>
                    {this.props.listItem}
                    <button onClick={this.onEditClick} >Edit</button>
                    <button onClick={this.onDeleteClick}>X</button>
                </ol>
                </div>
            )
        }
        return result
    }
}

export default ListItem;