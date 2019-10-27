// offfical doc
// https://material-table.com/
// 配置：https://material-table.com/#/docs/features/localization

const bodyCellStyle = {
  fontSize: '0.82rem',
  color: 'rgba(0, 0, 0, 0.87)',
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 300,
}

export const columnsArr = [
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
    lookup: { 1: '安徽', 2: '北京', 3: '上海', 4: '深圳', 5: '广州', 6: '杭州' },
    cellStyle: bodyCellStyle,
  },
]

export const optionsSetting = {
  // thead style
  headerStyle: {
    // backgroundColor: '#66bb6a',
    ...bodyCellStyle,
    fontSize: '1rem',
    color: '#66bb6a',
  },
  rowStyle: {
    backgroundColor: '#EEE',
  },
  exportButton: true,
  exportFileName: '报表信息',
  // 定位操作的位置
  actionsColumnIndex: -1,
  // 每页数量
  pageSize: 10,
}

export const localizationConfig = {
  header: {
    actions: '操作',
  },
  toolbar: {
    searchTooltip: '搜索',
    searchPlaceholder: '查找指定用户',
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
    labelRowsSelect: '条',
    labelDisplayedRows: '{from}-{to} of {count}',
    // labelDisplayedRows: '{count}条',
    firstTooltip: '首页',
    previousTooltip: '上一页',
    nextTooltip: '下一页',
    lastTooltip: '尾页'
  }
}
