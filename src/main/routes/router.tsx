  
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
import { makeFormReactHooksForm } from '../factories/pages'

const Router: React.FC = () => {

  return (
   
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={makeFormReactHooksForm} />
        </Switch>
      </BrowserRouter>
   
  )
}

export default Router
