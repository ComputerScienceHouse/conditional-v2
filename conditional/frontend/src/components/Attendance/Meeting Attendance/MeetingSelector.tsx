import React from 'react'
import { connect } from 'react-redux'
import { FormGroup, Label, Input } from 'reactstrap'
import InfoSpinner from '../../InfoSpinner'
import { fetchDirectorships } from '../../../actions/get'

interface MeetingSelectorProps {
  directorships: Array<any>;
  getDirectorships: Function;
  oidc: any;
  meetings: any;
}

const MeetingSelector: React.FunctionComponent<MeetingSelectorProps> = ({ directorships, getDirectorships, oidc, meetings }) => {

  const renderMeetingOptions = () => {
    return directorships.map((directorship, index) => {
      return (
        <option key={index} value={directorship.id}>{directorship.name}</option>
      )
    })
  }

  React.useEffect(() => {
    if (oidc.user && !directorships) {
      getDirectorships(oidc.user.access_token)
    }
  }, []);

  if (!this.props.directorships) {
    return (<InfoSpinner>Loading Directorships</InfoSpinner>)
  } else if (!this.props.directorships.length) {
    return (<h2>No Directorships found</h2>)
  }

  return (
    <FormGroup>
      <Label for={"meeting"}>Meeting Name</Label>
      <Input id={"meeting"} type={"select"}>
        {renderMeetingOptions()}
      </Input>
    </FormGroup>
  )
}

const mapStateToProps = state => ({
  oidc: state.oidc,
  directorships: state.apis.directorships
})

const mapDispatchToProps = dispatch => ({
  getDirectorships: accessToken => fetchDirectorships(dispatch, accessToken)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeetingSelector)
