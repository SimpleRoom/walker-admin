import React from 'react'
import PropTypes from 'prop-types'
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
// @material-ui/icons
import Edit from '@material-ui/icons/Edit'
import Close from '@material-ui/icons/Close'
// core components
import styles from '../../assets/jss/material-dashboard-react/components/tasksStyle'

const useStyles = makeStyles(styles)

const titleList = ["城市", "线路描述", "单价", "满意度", "操作"]

export default function CustomTable(props) {
  const classes = useStyles()
  const { tableHeaderColor, tableTitles = [...titleList], taskList } = props
  return (
    <Table className={classes.table}>
      {
        tableTitles !== undefined ? (
          <TableHead className={classes[tableHeaderColor + 'TableHeader']}>
            <TableRow className={classes.tableHeadRow}>
              {
                tableTitles.map(titleItem => (
                  <TableCell
                    className={classes.tableCell + ' ' + classes.tableHeadCell}
                    key={titleItem}
                  >{titleItem}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
        ) : null
      }
      <TableBody>
        {taskList && taskList.length ? taskList.map(item => (
          <TableRow key={item.id} className={classes.tableRow}>
            <TableCell className={classes.tableCell} style={{ minWidth: "70px" }}>{item.line_title}</TableCell>
            <TableCell className={classes.tableCell}>{item.line_desc}</TableCell>
            <TableCell className={classes.tableCell}>{item.price}</TableCell>
            <TableCell className={classes.tableCell}>{item.happiness}</TableCell>
            <TableCell className={classes.tableActions}>
              <Tooltip
                id='tooltip-top'
                title='编辑'
                placement='top'
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton
                  aria-label='Edit'
                  className={classes.tableActionButton}
                >
                  <Edit
                    className={
                      classes.tableActionButtonIcon + ' ' + classes.edit
                    }
                  />
                </IconButton>
              </Tooltip>
              <Tooltip
                id='tooltip-top-start'
                title='删除'
                placement='top'
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton
                  aria-label='Close'
                  className={classes.tableActionButton}
                >
                  <Close
                    className={
                      classes.tableActionButtonIcon + ' ' + classes.close
                    }
                  />
                </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
        )) : (
            <TableRow>
              <TableCell>当前列表为空</TableCell>
            </TableRow>
          )}
      </TableBody>
    </Table>
  )
}

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    'warning',
    'primary',
    'danger',
    'success',
    'info',
    'rose',
    'gray'
  ]),
  tableTitles: PropTypes.array,
  taskList: PropTypes.array
}
