import React from 'react'

import './todo-list-item.css'

export default class TodoListItem extends React.Component {

    // constructor() {
    //     super();
    //     this.onLabelClick = () => {
    //         console.log('click this: ' + this.props.label)
    //     }
    // }

    state = {
        done: false,
        important: false,
    };

    onLabelClick = () => {
        this.setState(({done}) => {
            return {
                done: !done
            }
        })
    };
    onImportantClick = () => {
        this.setState(({important}) => {
            return {
                important: !important
            }
        });
    };

    render() {
        const {label, onDeleted} = this.props;
        const {done, important} = this.state;

        let classNames = '';
        let classNamesImp = 'btn-icon btn btn-outline-success';
        if (done) {
            classNames += 'done'
        }
        if (important) {
            classNamesImp += ' active';
            classNames += ' important';
        }
        return (
            <div className='todo-list-item__block'>
        <span
            onClick={this.onLabelClick}
            className={classNames}
        >
        {label}
        </span>
                <div className='todo-list-item__btn-group'>
                    <button onClick={this.onImportantClick} className={classNamesImp}><i
                        className='fa fa-exclamation'></i></button>
                    <button onClick={onDeleted} className='btn-icon btn btn-outline-danger'><i
                        className="fa fa-times"></i></button>
                </div>
            </div>
        )
    }
}
