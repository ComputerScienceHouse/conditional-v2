import React from 'react'
import { Input, Label } from 'reactstrap'
import Select from 'react-select'

export const AttendancePicker: React.FunctionComponent = () => {
  return (
    <div>
      <Label for={"attendancepicker"}>Attendees</Label>
      <Select
        id={"attendancepicker"}
        isMulti
        Component={Input}
        name={"members"}
      />
    </div>
  )
};
