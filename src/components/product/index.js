import { inject, observer } from 'mobx-react'
import { compose, mapProps, branch, renderNothing } from 'recompose'

import Map from './map'

export default compose(
  inject('router'),
  inject('data'),
  observer
)(Map)