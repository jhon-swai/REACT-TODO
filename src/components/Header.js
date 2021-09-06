import PropTypes from 'prop-types'

import React from 'react'
import Button from './Button'

const Header = ({ title}) => {
    const onClick = () => {
        alert("You are awesome")
    }
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color="green" text="Add" onClick={onClick}/>
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
