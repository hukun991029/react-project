import React from 'react'
interface ListOptions {
  id: number
  name: string
  email: string
}
const List: React.FC<ListOptions> = ({ id, name, email }) => {
  return (
    <li>
      <img src={`https://robohash.org/${id}`} alt="" />
      <h2>{name}</h2>
      <h2>{email}</h2>
    </li>
  )
}

export default List
