import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

export const LanguageDropDown = () => {
    const language = ['All', 'Javascript', 'HTML', 'CSS']
    return (
        <DropdownButton className="ml-2 mt-2" id="dropdown-basic-button" title="Language:All">
            {language.map(item => <Dropdown.Item href="#">{item}</Dropdown.Item>)}
        </DropdownButton>
    )
}