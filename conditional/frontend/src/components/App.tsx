import * as React from 'react'
import { Container } from 'reactstrap'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect } from 'react-router-dom'
import { history } from '../store'
import ProtectedRoute from '../containers/ProtectedRoute'
import OidcCallback from '../containers/OidcCallback'
import {
  NavBar,
  Dashboard
} from './index'
import {
  DirectorshipList
} from './Attendance/Directorships'
import {
  MeetingAttendanceForm
} from './Attendance/Meeting Attendance'

const App: React.FunctionComponent = () => {
    return (
      <ConnectedRouter history={history}>
        <Container className={'main'} fluid>
          <NavBar/>
          <Container>
            <Switch>
              <Route exact path={'/callback'} component={OidcCallback}/>
              <Route exact path={"/"}><Redirect to={"/dashboard"}/></Route>
              <ProtectedRoute exact path={"/dashboard"} component={Dashboard}/>
              <ProtectedRoute exact path={"/directorships"} component={DirectorshipList}/>
              <ProtectedRoute exact path={"/attendance/meeting"} component={MeetingAttendanceForm}/>
            </Switch>
          </Container>
        </Container>
      </ConnectedRouter>
    )
}

export default App
