import React from 'react'
import {
  Collapse,
  Container,
  DropdownItem, DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  UncontrolledDropdown
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import UserProfile from '../../containers/UserProfile'

class NavBar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <div>
        <Navbar color="primary" dark expand="lg" fixed="top">
          <Container>
            <NavLink to="/" className={'navbar-brand'}>Conditional</NavLink>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink to="/" className={'nav-link'}>Home</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Attendance
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem tag={NavLink} to="/directorships">
                      Directorships
                    </DropdownItem>
                    <DropdownItem tag={NavLink} to="/attendance/meeting">
                      Meeting Attendance
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <Nav navbar className="ml-auto">
                <UserProfile/>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}

NavBar.propTypes = {}

export default NavBar
