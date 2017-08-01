import Data from './data'
import Router from './router'

class Store {
  data
  router

  constructor() {
    this.data = new Data()
    this.router = new Router(this.data)
  }
}

export default Store