import React from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap'

export const TypeDropDown = () => {
    const types = ['All', 'Public', 'Private', 'Sources', 'Forks', 'Archived', 'Mirrors']
    return (
        <DropdownButton className="ml-2 mt-2" id="dropdown-basic-button" title="Type:All">
            {
                types.map(item => <Dropdown.Item href="#">{item}</Dropdown.Item>)
            }
        </DropdownButton>
    )
}