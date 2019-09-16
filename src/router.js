import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import AddBook from './addBook';
import EditBook from './editBook';
import MapView from './map/map';

const MainRoute = () => {

  return (
    <div>
      <Switch>
        <Route path='/' component={AddBook} />
        <Route path='/edit' component={EditBook} />
        <Redirect to="/"></Redirect>
      </Switch>
    </div>
  )
}

export default MainRoute;