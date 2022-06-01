import React from 'react'
import '../styles/components/selector.scss'

const Selector = ({name, selected, showOptions, options}) => {

    return (
    <div className='selector' onClick={() => showOptions(name,options)}>
        <div className="selector__text">
            <span className='selector__name'>{name}</span>
            <span className='selector__selection'>{selected}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="selector__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    </div>
    )
}
 
export default Selector