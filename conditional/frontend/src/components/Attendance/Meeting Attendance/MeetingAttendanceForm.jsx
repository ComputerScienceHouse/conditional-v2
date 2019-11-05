import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import MeetingSelector from './MeetingSelector'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import DatePicker from '../../DatePicker/DatePicker'
import AttendancePicker from '../../AttendancePicker/AttendancePicker'

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
      return (
        <Container>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <MeetingSelector/>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <DatePicker/>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card>
                <CardBody>
                  <AttendancePicker/>
                </CardBody>
              </Card>
            </Col>
          </Row>
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
