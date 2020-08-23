import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CallbackComponent } from 'redux-oidc'
import { push } from 'connected-react-router'
import userManager from '../userManager'
import InfoSpinner from '../components/InfoSpinner/index'

interface OidcCallbackProps {
  dispatch: any;
}

const OidcCallback: React.FunctionComponent<OidcCallbackProps> = ({ dispatch }) => {
  return (
    <CallbackComponent
      userManager={userManager}
      successCallback={() => dispatch(push('/'))}
      errorCallback={(error) => {
        // TODO: Redirect to a more friendly error page
        dispatch(push('/'))
        console.error(error)
      }}
    >
      <InfoSpinner>Signing you in, please wait...</InfoSpinner>
    </CallbackComponent>
  )
}

OidcCallback.propTypes = {
  dispatch: PropTypes.any
}

export default connect()(OidcCallback)
