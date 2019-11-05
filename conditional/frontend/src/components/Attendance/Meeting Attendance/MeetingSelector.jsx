import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { FormGroup, Label, Input } from 'reactstrap'
import InfoSpinner from '../../InfoSpinner'
import { fetchDirectorships } from '../../../actions/get'

class MeetingSelector extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)

    this.state = {
      meetings: null
    }
  }

  renderMeetingOptions () {
    return this.props.directorships.map((directorship, index) => {
      return (
        <option key={index} value={directorship.id}>{directorship.name}</option>
      )
    })
  }

  componentDidMount () {
    if (this.props.oidc.user && !this.props.directorships) {
      this.props.getDirectorships(this.props.oidc.user.access_token)
    }
  }

  render () {
    if (!this.props.directorships) {
      return (<InfoSpinner>Loading Directorships</InfoSpinner>)
    } else if (!this.props.directorships.length) {
      return (<h2>No Directorships found</h2>)
    }

    return (
      <FormGroup>
        <Label for="meeting">Meeting Name</Label>
        <Input id="meeting" type="select">
          {this.renderMeetingOptions()}
        </Input>
      </FormGroup>
    )
  };
}

MeetingSelector.propTypes = {
  directorships: PropTypes.array,
  getDirectorships: PropTypes.func,
  oidc: PropTypes.any,
  meetings: PropTypes.any
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
