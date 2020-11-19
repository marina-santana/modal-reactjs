  
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
import { makeForm } from '../factories/pages'

const Router: React.FC = () => {

  return (
   
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={makeForm} />
        </Switch>
      </BrowserRouter>
   
  )
}

export default Router
