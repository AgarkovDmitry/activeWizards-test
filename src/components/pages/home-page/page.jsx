import React from 'react'

import styles from './style.less'
import Product from 'components/product'

export default () => (
  <div className={styles.page}>
    <div className={styles.body}>
      <div className={styles.center}>
        <Product/>
      </div>
    </div>
  </div>
) 