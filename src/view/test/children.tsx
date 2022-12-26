import React, { useContext, useState } from 'react'
import { context } from './provider'
import { Button } from 'antd'
interface propsOption {
  changeState: Function
}
const Children: React.FC<propsOption> = props => {
  const data = useContext(context)
  console.log(data)

  const transfer = () => {
    props.changeState(0)
  }
  return (
    <div>
      <Button onClick={transfer}> 子组件传递参数</Button>
      <p>{data.name}</p>
    </div>
  )
}
Children.defaultProps = {
  changeState: () => {}
}
export default Children
