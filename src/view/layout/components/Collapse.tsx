import style from '../css/sider.module.css'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
const Collapse = props => {
  return (
    <div
      className={style.collapse}
      style={{
        width: props.collapsed ? '80px' : '200px',
        backgroundColor: '#fff'
      }}
    >
      {props.collapsed ? (
        <MenuUnfoldOutlined
          className={style.svg}
          onClick={() => {
            props.handleChange(false)
          }}
        ></MenuUnfoldOutlined>
      ) : (
        <MenuFoldOutlined
          className={style.svg}
          onClick={() => {
            props.handleChange(true)
          }}
        ></MenuFoldOutlined>
      )}
    </div>
  )
}
export default Collapse
