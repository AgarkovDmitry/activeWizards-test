import { observable, action } from 'mobx'
import axios from 'axios'

class Request {
  @observable cities = []

  @action fetch(){
    axios.get(`${window.location.origin}/api/data`).then(res => {
      let keys = res.data[0]
      let data = res.data.filter((item, key) => key != 0) 
      this.cities.push(
        ...data.map(item => {
          let obj = {}
          keys.map((val, ind) => {
            obj[val] = item[ind]
          })
          return obj
        })
      )
    })
  }
}

export default Request