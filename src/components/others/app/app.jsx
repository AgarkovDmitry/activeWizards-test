import React from 'react'
import { Router, Route, Switch } from 'react-router'
import { Provider } from 'mobx-react'
import DevTools from 'mobx-react-devtools'
import Loadable from 'react-loadable'

import styles from './style.less'

import loading from 'components/others/loader'

const Home = Loadable({
  loader: () => import('components/pages/home-page'),
  loading
})

export default ({ store }) => (
  <Provider {...store}>
    <Router history={store.router.history}>
      <div>
        <div className={styles.page}>
          <div className={styles.wrapper}>
            <Switch>
              <Route exact path='/' component={Home}/>
            </Switch>
          </div>
        </div>
        <DevTools />
      </div>
    </Router>
  </Provider>
)
