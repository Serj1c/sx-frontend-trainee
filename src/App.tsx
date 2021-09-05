import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Navbar, Content, StoryPage } from 'components'

export const App: React.FunctionComponent = (): JSX.Element => {
  return (
    <Router>
        <Navbar />
        <Route exact path="/" component={Content} />
        <Route path="/item/:id" component={StoryPage} />
    </Router>
  )
}
