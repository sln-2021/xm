import React from 'react';
export default class Header extends React.Component {
  topNav = [
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
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.leftNav}>
          {this.topNav && this.topNav.map(item =>{
            return (
              <ul>
                <li>
                  <a href={item.url}>{item.title}</a>
                </li>
              </ul>
            );
          })}
          
        </div>
        <div className='rightNav'></div>
      </div>
    );
  }
}