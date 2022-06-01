import React, { useState } from 'react'
import '../styles/components/sideOption.scss'

const SideOption = ({name, filter, callback}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const selectOption = (option) => {
        toggle()
        callback(option,name)
    }
    return (
        <div className='sideOption' onClick={toggle}>
            <div className="sideOption__title">
                {name}
            </div>
            <div className="sideOption__selected">
                {filter.selected}
            </div>
            <div className="sideOption__wrapper">
                {
                    isOpen 
                    ?   <div className="sideOption__choices">
                            {filter.options.map(option => {
                                return (
                                    <div className="sideOption__choice" key={option} onClick={() => selectOption(option)}>
                                        {option}
                                    </div>
                                )
                            })}
                        </div> 
                    : null
                }
            </div>
        </div>
    )
}

export default SideOption