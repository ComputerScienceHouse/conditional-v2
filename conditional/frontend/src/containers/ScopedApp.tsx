import { connect } from 'react-redux'
import App from '../components/App'

const mapStateToProps = state => ({
  isRTP: (((state.oidc.user || {}).profile || {}).groups || []).includes('rtp'),
  oidc: state.oidc
})

const mapDispatchToProps = dispatch => ({
})

export const ScopedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
