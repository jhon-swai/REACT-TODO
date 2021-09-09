import PropTypes from 'prop-types'

import React from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ title, onShowAddTask, showAdd }) => {
    const location = useLocation()
    return (
        <header className="header">
            <h1>{title}</h1>
            { location.pathname === '/' && (
                showAdd ? 
                <Button color="Red" text="Close" onClick={onShowAddTask}/> 
                : <Button color="Green" text="Add" onClick={onShowAddTask}/>
            )}           
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
