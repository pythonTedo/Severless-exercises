import React, { Component } from 'react'
import { GroupsList } from './components/GroupsList'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import { NotFound } from './components/NotFound'
import { CreateGroup } from './components/CreateGroup'

export interface AppProps {}
export interface AppState {}

// it shows the common component generateMenu. both routers have this component
// generateCurrent will generate html element for the needed route
export default class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={16}>
                <Router>
                  {this.generateMenu()} 

                  {this.generateCurrentPage()}
                </Router>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }

  generateMenu() {
    return (
      <Menu>
        <Menu.Item name="home">
          <Link to="/">Home</Link>
        </Menu.Item>
      </Menu>
    )
  }

  // it its the firs, it will display the first one. if its / it will show the groups. it its not from the above Not found
  generateCurrentPage() {
    return (
      <Switch>
        <Route path="/groups/create" exact component={CreateGroup} />

        <Route path="/" exact component={GroupsList} />

        <Route component={NotFound} />
      </Switch>
    )
  }
}
