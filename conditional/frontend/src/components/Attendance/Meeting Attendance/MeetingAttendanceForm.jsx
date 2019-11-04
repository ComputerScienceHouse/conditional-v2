import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import InfoSpinner from '../../InfoSpinner'

class MeetingAttendanceForm extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  componentDidMount () {

  }

    handleSelect = (event) => {

    }

    render () {
      const { oidc } = this.props

      return (<InfoSpinner>Loading Attendance Form for { oidc.user.profile.preferred_username }</InfoSpinner>)
    }
}

MeetingAttendanceForm.propTypes = {
  oidc: PropTypes.any
}

const mapStateToProps = state => ({
  oidc: state.oidc,
  name: ((state.oidc.user || {}).profile || {}).name,
  username: ((state.oidc.user || {}).profile || {}).preferred_username
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MeetingAttendanceForm)
