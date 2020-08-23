import React from 'react'
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap'

interface ProfileProps {
  name?: string;
  username?: string;
}

const Profile: React.FunctionComponent<ProfileProps> = ({ name, username }) => {

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

    if (!name || !username) return null

    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret className="navbar-user">
          <img
            className="rounded-circle"
            src={`https://profiles.csh.rit.edu/image/${username}`}
            alt=""
            aria-hidden={true}
            width={32}
            height={32}
          />
          {name} ({username})
          <span className="caret"/>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
                        Dashboard
          </DropdownItem>
          <DropdownItem>
                        Settings
          </DropdownItem>
          <DropdownItem divider/>
          <DropdownItem>
                        Logout
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
}

export default Profile
