import PropTypes from 'prop-types'

import React from 'react'
import Button from './Button'

const Header = ({ title, onShowAddTask, showAdd }) => {
    
    return (
        <header className="header">
            <h1>{title}</h1>
            { showAdd ? 
            <Button color="Red" text="Close" onClick={onShowAddTask}/> 
            : <Button color="Green" text="Add" onClick={onShowAddTask}/> }
            
        </header>
    )
}

Header.defaultProps = { 
    title: "Welcome"
}
Header.propTypes = {
    title: PropTypes.string
}

export default Header
