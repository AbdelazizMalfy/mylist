import React, { Component } from 'react';
import ListItem from './ListItem';
import NewItem from './NewItem';

import './List.css'

class List extends Component {
    state = {
        list: [
            
        ]
    }

    create = ( listItem ) =>{
        this.setState({
            list: [...this.state.list,listItem]
        })
    }


    remove = (id) => {
        this.setState({
            list: this.state.list.filter(item => item.id !== id )
        })
    }

    update = (id, updatedItem) => {
        const updatedList = this.state.list.map( item => {
            if(item.id === id ){
                return {...item, listItem : updatedItem}
            }else {
                return item;
            }
        })
        this.setState({list:updatedList});
    }

    render() {
        return (
            <div className='list'>
                <h2>My Top ten Movies List</h2>
                {
                    this.state.list.map( item => 
                        <ListItem 
                        key={item.id} 
                        item={item}
                        listItem={item.listItem}
                        remove={this.remove}
                        update={this.update} /> 
                    )
                }
                <NewItem createItem={this.create} />
            </div>
        )
    }
}

export default List; 