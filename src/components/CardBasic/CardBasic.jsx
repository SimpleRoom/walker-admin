import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import Card from '../Card/Card'
import CardBody from '../Card/CardBody'
import Button from '../CustomButtons/CustomButtons'

import styles from '../../assets/jss/material-dashboard-react/cardImagesStyles'

const useStyles = makeStyles(styles)

const CardBasic = ({ hotelInfo }) => {
  const classes = useStyles()
  return (
    <Card style={{ width: "100%" }}>
      <img
        className={classes.cardImgTop}
        alt="100%x180"
        style={{ height: "180px", width: "100%", display: "block" }}
        src={hotelInfo.img_url}
      />
      <CardBody>
        <h5>{hotelInfo.title}</h5>
        <p>{`${hotelInfo.type}  ${hotelInfo.score_rate}`}</p>
        <p>{hotelInfo.price}</p>
        <Button color="success">预订</Button>
      </CardBody>
    </Card>
  )
}

CardBasic.propTypes = {
  hotelInfo: PropTypes.object,
}

CardBasic.defaultProps = {
  hotelInfo: null,
}

export default CardBasic

