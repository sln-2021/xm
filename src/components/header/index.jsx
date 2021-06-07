import React from 'react';
import styles from './index.module.less';
import { ShoppingCartOutlined } from '@ant-design/icons';
export default class Header extends React.Component {
  leftNav = [
    {
      title: '小米商城',
      url: '',
    },
    {
      title: 'MIUI',
      url: '',
    },
    {
      title: 'IoT',
      url: '',
    },
    {
      title: '云服务',
      url: '',
    },
    {
      title: '天星数科',
      url: '',
    },
    {
      title: '有品',
      url: '',
    },
    {
      title: '小爱开放平台',
      url: '',
    },
    {
      title: '企业团购',
      url: '',
    },
    {
      title: '资质证照',
      url: '',
    },
    {
      title: '协议规则',
      url: '',
    },
    {
      title: '下载app',
      url: '',
    },
    {
      title: '智能生活',
      url: '',
    },
    {
      title: 'select Location',
      url: '',
    },
  ];
  rightNav = [
    {
      title: '登录',
      path: '',
    },
    {
      title: '注册',
      path: '',
    },
    {
      title: '消息通知',
      path: '',
    },
    {
      title: '购物车',
      path: '',
      icon: 'ShoppingCartOutlined',
    },
  ];
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.leftNav}>
          <ul>
            {this.leftNav &&
              this.leftNav.map((item) => {
                return (
                  <li>
                    <a href={item.url}>{item.title}</a>
                    <span className={styles.sep}>|</span>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className={styles.rightNav}>
          <ul>
            {this.rightNav &&
              this.rightNav.map((item) => {
                return (
                  <li className = {item.icon ? styles.last : ''}>
                    {item.icon && <ShoppingCartOutlined className={styles.icon} />}
                    <a href={item.path}>{item.title}</a>
                    <span className={styles.sep}>|</span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}