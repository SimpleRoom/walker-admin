
const bodyCellStyle = {
  fontSize: '0.82rem',
  color: 'rgba(0, 0, 0, 0.87)',
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 300,
}

// 对应 table thead列表项，异步数据需要配置 totalCount参数
export const columnsArr = [
  { title: 'ID', field: 'id', cellStyle: bodyCellStyle },
  { title: '姓名', field: 'name', cellStyle: bodyCellStyle },
  { title: '年龄', field: 'age', cellStyle: bodyCellStyle },
  { title: '电话', field: 'phone', cellStyle: bodyCellStyle },
  { title: '生日', field: 'birthday', type: 'string', cellStyle: bodyCellStyle },
  {
    title: '月薪',
    field: 'salary',
    // lookup 自动filter的关键词
    lookup: { 1: 10000, 2: 8000, 3: 7000, 4: 6500, 5: 5500, 6: 4500 },
    cellStyle: bodyCellStyle,
  },
]
