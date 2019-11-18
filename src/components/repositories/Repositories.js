import React, { useState, useContext, useEffect } from 'react';
import { TypeDropDown } from '../dropdowns/TypeDropDown'
import { LanguageDropDown } from '../dropdowns/LanguageDropDown'
import { Button } from '../button/Button'
import { UserContext } from '../userContext/UserContext'
import './Repo.css'
import { formatDate } from '../utils/formatUtils'


const Repository = () => {
    const data = useContext(UserContext)
    const [initialItems, setInitialItems] = useState([])
    console.log('data', data.repoList)

    useEffect(() => {
        setInitialItems(data.repoList)
    }, [data])



    const handleInputChange = (evt) => {
        let updatedLists = data.repoList
        updatedLists = updatedLists.filter(item => {
            return item.name.search(evt.target.value) !== -1
        })
        setInitialItems(updatedLists)
    }

    return (
        <div className="container mt-60">
            <form>
                <div className="form-row align-items-center">
                    <div class="col-auto">
                        <input
                            type="text"
                            class="form-control width-full mt-2"
                            id="inlineFormInput"
                            placeholder="find a repository..."
                            onChange={evt => handleInputChange(evt)}
                            style={{ width: '400px', marginLeft: '9px' }}
                        />
                    </div>
                    <TypeDropDown />
                    <LanguageDropDown />
                    <Button />
                </div>
            </form>
            <div>
                {
                    initialItems && initialItems.map((list, index) => {
                        return (
                            <ul key={index} style={{marginLeft: '-30px', marginTop: '10px'}}>
                                <li><a href="#/">{list.name}</a></li>
                                <span>{list.description}</span><br />
                                <span>updated at {formatDate(list.updated_at)}</span>
                                <hr></hr>
                            </ul>
                        )
                    })
                }
            </div>
        </div >

    )
}
export default Repository