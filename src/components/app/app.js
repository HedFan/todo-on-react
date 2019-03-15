import React from 'react'

import ToDoList from '../todo-list/';
import HeaderBlock from '../header-block/';
import SearchBlock from '../search-block/';
import ItemStatusFilter from '../item-status-filter/';
import AddFormBlock from "../add-form-block/";


export default class Val extends React.Component {
    maxId = 100;

    state = {
        liData: [
            {label: 'First list', important: false, id: 1},
            {label: 'We find second list', important: false, id: 2},
            {label: 'But third..i don`t know', important: true, id: 3},
        ]
    };

    deleteItem = (id) => {
        this.setState(({liData}) => {
            const idx = liData.findIndex((el) => el.id === id);

            let newArr = [
                ...liData.slice(0, idx),
                ...liData.slice(idx + 1)
            ];
            return {
                liData: newArr
            }
        }
       )
    };



    addItem = (text) => {
        let data = {};
        let newArr = [];
        this.setState(({liData}) => {
            data = {label: text, important: false, id: this.maxId++};
            newArr = liData;
            newArr.push(data);
            return {
                liData: newArr
            }
        });
    };

    // addItem = (text) => {
    //     this.setState(({liData}) => {
    //         const newItem = {
    //             label: text, important: false, id: this.maxId++
    //         };
    //         const newArr = [
    //             ...liData, newItem
    //         ];
    //         return {
    //             liData: newArr
    //         }
    //     });
    // };

    render() {
        const {liData} = this.state;
        return (
            <div>
                <HeaderBlock/>
                <ItemStatusFilter/>
                <SearchBlock/>
                <ToDoList
                    todos={liData}
                    onDeleted={this.deleteItem}
                />
                <AddFormBlock
                    onAdded={this.addItem}

                />
            </div>
        )
    }
};