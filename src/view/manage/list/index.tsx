import React from 'react'
import List from './components/List'
import style from './css/index.module.css'
const data = [
  {
    id: 1,
    name: '111',
    email: '111'
  },
  {
    id: 2,
    name: '222',
    email: '222'
  }
]
const listPage: React.FC = () => {
  return (
    <ul className={style.bg}>
      {data.map(item => (
        <List
          id={item.id}
          name={item.name}
          email={item.email}
          key={item.id}
        ></List>
      ))}
    </ul>
  )
}
export default listPage
