import React from 'react'
import { connect } from 'react-redux'
import InfoSpinner from '../../InfoSpinner'

const DirectorshipList: React.FunctionComponent = (props) => {
      return (<InfoSpinner>Loading Meetings</InfoSpinner>)
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
