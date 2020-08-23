import React, { Component } from 'react'
import { connect } from 'react-redux'
import InfoSpinner from '../InfoSpinner'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

    handleSelect = (event) => {

    }

    render () {
      return (<InfoSpinner>Loading Content</InfoSpinner>)
    }
}

const mapStateToProps = state => ({
  oidc: state.oidc
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
