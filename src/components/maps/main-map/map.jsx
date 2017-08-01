import React from 'react'
import ReactDOM from 'react-dom'
import { observable, action, computed } from 'mobx'

import styles from './style.less'

import AnyChart from 'anychart-react'

class Map extends React.Component{
  @observable filter = 500000

  @action updFilter = e => {
    let value = e.target.value
    if(isNaN(value)) {
      value = value.slice(0, -1)
    }

    value = value ? parseInt(value) : ''
    this.filter = value ? parseInt(value) : ''
  }

  @computed get dataSet(){
    const filtered = this.props.data.cities.filter(city => parseInt(city.Population) > (this.filter || 500000))
    const markers = filtered.map(item => ({
      lat: item.Lat, 
      long: item.Long, 
      name: item['City Name'], 
      value: item.Population
    }))
    return anychart.data.set(markers)
  }

  constructor(props){
    super(props)

    this.updFilter = this.updFilter.bind(this)
  }

  render(){
    return (
      <div className={styles.map}>
        <div>
          Population
          <input placeholder={'enter desired population'} onChange={this.updFilter} value={this.filter}/>
        </div>
        <AnyChart
          width={window.innerWidth*0.96}
          height={600}
          type="choropleth"
          marker={this.dataSet}
          geoData="anychart.maps.world"
        />
      </div>
    )
  }
}

export default Map