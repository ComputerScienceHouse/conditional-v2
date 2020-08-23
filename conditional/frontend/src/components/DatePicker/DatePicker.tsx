import React from 'react'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'
import { Input, Label, Modal, ModalBody } from 'reactstrap'

export const DatePicker: React.FunctionComponent = (props) => {

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const handleDate = (date) => {
    setSelectedDate(date)
    console.log(date)
    return date
  }

    return (
      <div>
        <Label for="datepicker">Meeting Date</Label>
        <Input id="datepicker" onClick={toggle} value={selectedDate}>
          {selectedDate}
        </Input>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalBody>
            <InfiniteCalendar
              theme={{
                selectionColor: 'rgb(176, 25, 126)',
                textColor: {
                  default: '#333',
                  active: '#FFF'
                },
                weekdayColor: 'rgb(176, 25, 130)',
                headerColor: 'rgb(176, 25, 126)',
                floatingNav: {
                  background: '#b0197e',
                  color: '#FFF',
                  chevron: '#E11C52'
                }
              }}
              width={'100%'}
              min={new Date(2016, 1, 1)} // TODO: Real Dates (1 year in the past)
              max={new Date(2025, 12, 31)} // TODO: Real Dates (1 year away)
              selected={selectedDate}
              onSelect={handleDate}
            />
          </ModalBody>
        </Modal>
      </div>
    )
};
