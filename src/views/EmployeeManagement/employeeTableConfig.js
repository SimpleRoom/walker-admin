
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
  { title: '电话', field: 'phone', cellStyle: bodyCellStyle },
  { title: '生日', field: 'birthday', type: 'string', cellStyle: bodyCellStyle },
  {
    title: '出生地',
    field: 'birthCity',
    // birthCity id 
    lookup: { 1: '安徽', 2: '北京', 3: '上海', 4: '深圳', 5: '广州', 6: '杭州' },
    cellStyle: bodyCellStyle,
  },
]
