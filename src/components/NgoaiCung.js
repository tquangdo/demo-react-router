import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../NgoaiCung.css'
import Menu from './Menu/Menu'
import { route_items } from '../mocks/mockListItems'

class NgoaiCung extends React.Component {
  goiRoute = (route_items_arg) => {
    let kqTraVe = null
    if (route_items_arg.length > 0) {
      kqTraVe = route_items_arg.map((item, chiso) => {
        return (
          <Route key={chiso} path={item.path} exact={item.exact} component={item.component}></Route>
        )
      })
    }
    return kqTraVe
  }
  render() {
    return (
      <Router>
        <div >
          <Menu></Menu>
          <Switch>
            {this.goiRoute(route_items)}
          </Switch>
        </div>
      </Router>
    )
  }
}

export default NgoaiCung
