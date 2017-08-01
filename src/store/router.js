import { action } from 'mobx'
import createBrowserHistory from 'history/createBrowserHistory'

class RouterStore {
  data
  history

  constructor(data) {
    this.history = createBrowserHistory()
    this.data = data

    switch (this.history.location.pathname) {
      case '/': {
        this.data.fetch()
        break
      }
    }
  }

  @action shoHome() {
    this.history.push('/')
    this.data.fetch()
  }
}

export default RouterStore