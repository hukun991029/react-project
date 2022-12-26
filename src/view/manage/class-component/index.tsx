import React from 'react'
import { Button } from 'antd'
interface PropsOptions {
  name: string
}
interface StateType {
  name: string
}

class ClassComponent extends React.Component<PropsOptions, StateType> {
  constructor(props: PropsOptions) {
    super(props)
    this.state = {
      name: '张三'
    }
    this.setName = this.setName.bind(this)
  }
  setName(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(e)
    this.setState({ name: '' })
  }
  render(): React.ReactNode {
    return (
      <div>
        <li>{this.state.name}</li>
        <Button onClick={this.setName}>点击</Button>
      </div>
    )
  }
}
export default ClassComponent
