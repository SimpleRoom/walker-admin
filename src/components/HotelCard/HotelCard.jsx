import React from 'react'
import PropTypes from 'prop-types'

import styles from './HotelCard.module.scss'

const HotelCard = ({ imgSrc, title, descText }) => (
  <div className={styles.content}>
    <div className={styles.wrap} style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className={styles.mask}>
        <h3>{title}</h3>
        <p>{descText}</p>
      </div>
    </div>
  </div>
)

HotelCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  descText: PropTypes.string,
}

HotelCard.defaultProps = {
  imgSrc: '',
  title: '',
  descText: '',
}

export default HotelCard
