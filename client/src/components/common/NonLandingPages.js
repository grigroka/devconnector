import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../create-profile/CreateProfile';
import EditProfile from '../edit-profile/EditProfile';
import AddExperience from '../add-credencials/AddExperience';
import AddEducation from '../add-credencials/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import NotFound from '../not-found/NotFound';
import Post from '../post/Post';

export class NonLandingPages extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profiles" component={Profiles} />
          <Route exact path="/profile/:handle" component={Profile} />
          <Route exact path="/not-found" component={NotFound} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/create-profile"
            component={CreateProfile}
          />
          <PrivateRoute exact path="/edit-profile" component={EditProfile} />
          <PrivateRoute
            exact
            path="/add-experience"
            component={AddExperience}
          />
          <PrivateRoute exact path="/add-education" component={AddEducation} />
          <PrivateRoute exact path="/post/:id" component={Post} />
          <PrivateRoute exact path="/feed" component={Posts} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default NonLandingPages;
