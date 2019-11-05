import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import InfoSpinner from '../../InfoSpinner'
import MeetingSelector from './MeetingSelector'
import { Card, CardBody, Container } from 'reactstrap'
import DatePicker from '../../DatePicker/DatePicker'

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

      return (
        <Container>
          <Card>
            <CardBody>
              <MeetingSelector/>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <DatePicker/>
            </CardBody>
          </Card>
          <InfoSpinner>Loading Attendance Form for { oidc.user.profile.preferred_username }</InfoSpinner>
        </Container>
      )
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
