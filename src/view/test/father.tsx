import React, { useEffect, useState } from 'react'
import { Button } from 'antd'
import Children from './children'
import { defaultContext, context } from './provider'
const Father: React.FC = () => {
  const [state, setState] = useState<number>(0)
  const [data, setData] = useState<unknown>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    document.title = `点击${state}`
  }, [state])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          'https://hn.algolia.com/api/v1/search?query=redux'
        )
        const data = await res.json()
        setData(data)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    fetchData()
  }, [])
  const changeState = (value: any) => {
    setState(value++)
  }
  return (
    <div>
      <Button>父组件接收数据{state}</Button>
      <context.Provider value={defaultContext}>
        <Children changeState={changeState}></Children>
      </context.Provider>
      {loading ? <h1>加载中</h1> : data.page}
    </div>
  )
}
export default Father
