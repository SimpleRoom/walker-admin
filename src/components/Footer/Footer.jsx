import React from 'react'
// @material-ui/icons
// import Icon from '@material-ui/core/Icon'
import GitHub from '@material-ui/icons/GitHub'
import styles from './Footer.module.scss'

export default () => {
  return (
    <div className={styles.footer}>
      <p>
        &copy;2018-by
        <a
          href="https://github.com/wjf444128852"
          target="_blank"
          rel="noopener noreferrer"
        >
          九成
          <GitHub />
        </a>
        , Made with
        <a
          href="https://github.com/mui-org/material-ui"
          arget="_blank"
          rel="noopener noreferrer"
        >
          material-ui
        </a>
      </p>
    </div>
  )
}