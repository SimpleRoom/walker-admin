import React from 'react'
// 更高级的table
import MaterialTable from 'material-table'

const bodyCellStyle = {
  fontSize: '0.82rem',
  color: 'rgba(0, 0, 0, 0.87)',
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 300,
}
// https://material-table.com/
// 配置：https://material-table.com/#/docs/features/localization
export default function MaterialTableWrap() {
  const [state, setState] = React.useState({
    // thead 
    columns: [
      { title: 'ID', field: 'id', cellStyle: bodyCellStyle },
      { title: '姓名', field: 'name', cellStyle: bodyCellStyle },
      { title: '年龄', field: 'age', cellStyle: bodyCellStyle },
      { title: '加入时间', field: 'joinTime', cellStyle: bodyCellStyle },
      { title: '到期时间', field: 'expiredTime', cellStyle: bodyCellStyle },
      { title: '生日', field: 'birthday', type: 'string', cellStyle: bodyCellStyle },
      {
        title: '出生地',
        field: 'birthCity',
        // birthCity id 
        lookup: { 1: '安徽', 2: '北京', 34: '上海', 63: '深圳' },
        cellStyle: bodyCellStyle,
      },
    ],
    data: [
      {
        index: 0,
        id: '10052',
        name: '李长青',
        age: 29,
        joinTime: '2016/05/03',
        expiredTime: '2022/10/04',
        birthday: '1990/08/09',
        birthCity: 63,
      },
      {
        index: 1,
        id: '10086',
        name: '魏云福',
        age: 21,
        joinTime: '2018/12/25',
        expiredTime: '2021/02/07',
        birthday: '1998/10/20',
        birthCity: 34,
      },
    ],
  })

  return (
    <MaterialTable
      title=""
      columns={state.columns}
      data={state.data}
      options={{
        headerStyle: {
          // backgroundColor: '#66bb6a',
          ...bodyCellStyle,
          fontSize: '1rem',
          color: '#66bb6a'
        },
        rowStyle: {
          backgroundColor: '#EEE',
        },
        exportButton: true,
        exportFileName: '报表信息',
        // 定位操作的位置
        actionsColumnIndex: -1,
      }}
      // 显示设置
      localization={{
        header: {
          actions: '操作',
        },
        toolbar: {
          searchTooltip: '搜索',
          searchPlaceholder: '查询用户',
          exportTitle: '导出',
          exportName: '导出到CVS文件',
        },
        body: {
          emptyDataSourceMessage: '当前列表为空',
          addTooltip: '增加',
          editTooltip: '编辑',
          deleteTooltip: '删除',
          // 编辑选项提示设置
          editRow: {
            deleteText: '您确定要删除该选项吗？请您三思...',
            saveTooltip: '确定',
            cancelTooltip: '取消',
          }
        },
        pagination: {
          labelRowsSelect: '行',
          // labelDisplayedRows: '{from}-{to} of {count}',
          labelDisplayedRows: '{count}条',
          firstTooltip: '首页',
          previousTooltip: '上一页',
          nextTooltip: '下一页',
          lastTooltip: '尾页'
        }
      }}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve()
              setState(prevState => {
                const data = [...prevState.data]
                data.push(newData)
                return { ...prevState, data }
              })
            }, 600)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve()
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data]
                  var index = data.filter(item => item.index === newData.index)[0].index
                  data[index] = { ...newData }
                  console.log(index)
                  return { ...prevState, data }
                })
              }
            }, 600)
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve()
              setState(prevState => {
                const data = [...prevState.data]
                data.splice(data.indexOf(oldData), 1)
                return { ...prevState, data }
              })
            }, 600)
          }),
      }}
    />
  )
}
