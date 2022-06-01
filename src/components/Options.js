import React from 'react'
import '../styles/components/options.scss'

const Options = ({name ,selected, callback}) => {
    return (
        <div className='options'>
            <div className="options__title">
                {name}
            </div>
            <div className="options__choices">
                {selected.options.map(option => {
                    return (
                        <div key={option} className="option" onClick={() => callback(option,name)}>
                            {option}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Options