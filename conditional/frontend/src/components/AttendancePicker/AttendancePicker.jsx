import React from 'react'
import { Input, Label } from 'reactstrap'
import Select from 'react-select'

class AttendancePicker extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)

    this.state = {
    }
  }

  render () {
    return (
      <div>
        <Label for="attendancepicker">Attendees</Label>
        <Select
          id="attendancepicker"
          isMulti
          Component={Input}
          name="members"
        />
      </div>
    )
  }
};

export default AttendancePicker
