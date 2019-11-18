import React from 'react'
import { UserProfile } from '../userProfile/UserProfile'
// import { UserProfileDetails } from '../userProfileDetails/UserProfileDetails'
import { Navigation } from '../navigation/Navigation'
import Repositories from '../repositories/Repositories'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './componentWrapper.css'

export const ComponentWrapper = () => {
    return (
        <BrowserRouter>
            <div className="row">
                <div className="col-sm-3 mt-3">
                    <UserProfile />
                </div>
                <div className="col-lg-8 repo-container mt-4 ">
                    <Navigation />
                    <Switch>
                        <Route path='/repo' component={Repositories} />
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}
