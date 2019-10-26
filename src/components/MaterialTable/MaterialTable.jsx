import React, { useState } from 'react'
// 更高级的table
import MaterialTable from 'material-table'
// table config
import { columnsArr, optionsSetting, localizationConfig } from './materialTableConfig'
// mock data
import { getMockMembers } from '../../dbdata/memberdb'

export default function MaterialTableWrap() {
  const list = getMockMembers(32)
  const [data, setData] = useState(list)
  const pageSizeChange = (pageSize) => {
    console.log(`pageSize change ${pageSize}`)
  }
  const pageChange = (page) => {
    console.log(`page change ${page}`)
  }
  const showHandle = (column, hidden) => {
    console.log(column, hidden)
  }
  return (
    <MaterialTable
      title=""
      columns={columnsArr}
      data={data}
      options={optionsSetting}
      // 显示设置
      localization={localizationConfig}
      onChangePage={pageChange}
      onChangeRowsPerPage={pageSizeChange}
      onChangeColumnHidden={showHandle}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve()
              setData(prevState => {
                const nextData = [...prevState]
                const dataLength = nextData.length
                nextData.push({ ...newData, index: dataLength })
                return [...nextData]
              })
            }, 600)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve()
              if (oldData) {
                setData(prevState => {
                  const data = [...prevState]
                  var index = data.filter(item => item.index === newData.index)[0].index
                  data[index] = { ...newData }
                  return [...data]
                })
              }
            }, 600)
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve()
              setData(prevState => {
                const data = [...prevState]
                const { index } = oldData
                data.splice(index, 1)
                console.log(oldData, '1111')
                // console.log(data, 'NEXT')
                return [...data]
              })
            }, 600)
          }),
      }}
    />
  )
}
