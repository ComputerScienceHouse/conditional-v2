import * as React from 'react'
import { connect } from 'react-redux'
import InfoSpinner from '../InfoSpinner'

const Dashboard: React.FunctionComponent = () => {
    return (<InfoSpinner>Loading Content</InfoSpinner>)
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
