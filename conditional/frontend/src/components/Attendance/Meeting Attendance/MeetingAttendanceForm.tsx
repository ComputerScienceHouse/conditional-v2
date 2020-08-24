import * as React from 'react'
import { connect } from 'react-redux'
import MeetingSelector from './MeetingSelector'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import DatePicker from '../../DatePicker'
import { AttendancePicker } from '../../AttendancePicker/AttendancePicker'

const MeetingAttendanceForm: React.FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <MeetingSelector />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <DatePicker />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <CardBody>
              <AttendancePicker />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
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
