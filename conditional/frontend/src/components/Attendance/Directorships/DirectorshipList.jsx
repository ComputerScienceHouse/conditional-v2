import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import InfoSpinner from '../../InfoSpinner'

class DirectorshipList extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  componentDidMount () {

  }

    handleSelect = (event) => {

    }

    render () {
      return (<InfoSpinner>Loading Meetings</InfoSpinner>)
    }
}

DirectorshipList.propTypes = {
  oidc: PropTypes.any
}

const mapStateToProps = state => ({
  oidc: state.oidc
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectorshipList)
