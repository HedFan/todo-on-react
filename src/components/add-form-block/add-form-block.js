import React from 'react'
import './add-form-block.css'

export default class AddFormBlock extends React.Component {
    render() {
        const {onAdded} = this.props;
        return (
            <div className='add-form-block'>
                <button onClick={() => onAdded('moikkka moimoi')} className='btn btn-outline-success'>Add some item</button>
            </div>
        )
    }
}