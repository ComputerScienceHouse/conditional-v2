import React from 'react'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'
import { Input, Label, Modal, ModalBody } from 'reactstrap'

class DatePicker extends React.Component {
  constructor (props) {
    super(props)
    console.log(props)

    this.toggle = this.toggle.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.state = {
      isOpen: false,
      selectedDate: new Date()
    }
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleDate (date) {
    this.setState({
      selectedDate: date
    })
    console.log(date)
    return date
  }

  render () {
    return (
      <div>
        <Label for="datepicker">Meeting Date</Label>
        <Input id="datepicker" onClick={this.toggle} value={this.state.selectedDate}>
          {this.state.selectedDate}
        </Input>
        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
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
              min={new Date(2016, 1, 1)}
              selected={this.state.selectedDate}
              onSelect={this.handleDate}
            />
          </ModalBody>
        </Modal>
      </div>
    )
  }
};

export default DatePicker
