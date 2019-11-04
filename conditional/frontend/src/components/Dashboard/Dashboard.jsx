import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import InfoSpinner from '../InfoSpinner'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    console.log(props)
  }

  componentDidMount () {

  }

    handleSelect = (event) => {

    }

    render () {
      return (<InfoSpinner>Loading Content</InfoSpinner>)
    }
}

Dashboard.propTypes = {
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
)(Dashboard)
