import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const UserContext = createContext()

export const DataProvider = props => {
    const [state, setstate] = useState([])
    const [repoList, setRepoList] = useState([])
    useEffect(() => {
        axios.get(`https://api.github.com/users/supreetsingh247`)
            .then(res => {
                setstate(res.data)
            })
    }, [])
    useEffect(() => {
        axios.get(`https://api.github.com/users/supreetsingh247/repos`)
            .then(res => {
                setRepoList(res.data)
            })
    }, [])


    return (
        <UserContext.Provider value={{state: state, repoList: repoList}}>
            {props.children}
        </UserContext.Provider>
    )
}