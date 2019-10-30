// offfical doc
// https://material-table.com/
// 配置：https://material-table.com/#/docs/features/localization

// 1.table-thbody-td的样式
const bodyCellStyle = {
  fontSize: '0.82rem',
  color: 'rgba(0, 0, 0, 0.87)',
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 300,
}

// 2.table-thead列数配置，与异步数据格式需一致
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

// 3. 其他配置，
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
  //是否需要导出报表CSV文件，按钮
  exportButton: true,
  //导出报表的名字
  exportFileName: '报表信息',
  // 操作按钮的位置，定位操作的位置，-1是末尾，默认开头
  actionsColumnIndex: -1,
  //是否需要开启分页
  paging: true,
  // 分页中每页数量，异步数据还需要配置total
  pageSize: 10,
}

// 4. table表格语言本地化配置，默认都是英文
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
