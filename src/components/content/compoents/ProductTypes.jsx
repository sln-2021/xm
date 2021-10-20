import React from 'react';
import styles from './productTypes.modules.less';
import { RightOutlined } from '@ant-design/icons';
export default class ProductTypes extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      pannel: null,
    }
  }
  onClose = () => {
    this.setState({
      visible: false
    })
  }
  onHover = (type) => {
    console.log(123456);
    let arr;
    this.listsProducts.map(item => {
      if (item.type === type) {
        return arr = item.products
      }
    })
    console.log(arr,'ararrrrrrr');
    this.setState({
      visible: true,
      pannel: arr
    })
  }
  lists = [
    { title: '手机', type: 'phone' },
    { title: '电视', type: 'computer' },
    { title: '笔记本 平板', type: 'ipad' },
    { title: '家电', type: 'house' },
    { title: '出行 穿戴', type: 'wear' },
    { title: '智能 路由器', type: 'intelligent' },
    { title: '电源 配件', type: 'power' },
    { title: '健康 儿童', type: 'children' },
    { title: '耳机 音箱', type: 'headset' },
    { title: '生活 箱包', type: 'live' },
  ]

  listsProducts = [
    {
      type: 'phone',
      products: [{ name: 'Xiaomi Civi', url: require('../../../assets/img/phone/civi.png') }, { name: 'Xiaomi 11', url: require('../../../assets/img/phone/phone2.webp') }]
    },
    {
      type: 'computer',
      products: [{ name: '小米盒子' }, { name: '小米壁画电视' }]
    }
  ]
  render() {
    const { visible, pannel } = this.state
    return (
      <>
        <div className={styles.main}>
          <div className={styles.container} onMouseLeave={this.onClose}>
            <ul>
              {this.lists.map((item, index) => {
                return (
                  <li onMouseEnter={this.onHover(item.type)} key={index} >
                    <div className={styles.itemLeft}>{item.title}</div>
                    <div className={styles.itemRight}><RightOutlined /></div>
                  </li>
                )
              })}

            </ul>
            <div style={{ zIndex: visible ? '10000' : '', display: visible ? 'block' : 'none' }} onMouseLeave={this.onClose} className={styles.extraProducts}>
              {pannel &&
                pannel.map(it => {
                  return (
                    <>
                      <div>{it.name}</div>
                      <div>
                        <img src={it.url} alt='' />
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
          <div className={styles.content}>
            {pannel}
          </div>
        </div>

      </>
    )
  }
}