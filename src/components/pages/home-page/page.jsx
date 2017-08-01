import React from 'react'

import styles from './style.less'
import MainMap from 'components/maps/main-map'

export default () => (
  <div className={styles.page}>
    <div className={styles.body}>
      <div className={styles.center}>
        <MainMap/>
      </div>
    </div>
  </div>
) 