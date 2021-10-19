import React from 'react';
import styles from './topNav.module.less';
import imgUrl from '../../../assets/img/logomi2.png';
import { Select } from 'antd';

const { Option } = Select;
export default class TopNav extends React.Component {
  state = {
    hoverFlag: false,
  };

  navLists = [
    { id: 1, title: 'Xiaomi手机' },
    { id: 2, title: 'Redmi红米' },
    { id: 3, title: '电视' },
    { id: 4, title: '笔记本' },
    { id: 5, title: '家电' },
    { id: 6, title: '路由器' },
    { id: 7, title: '智能硬件' },
    { id: 8, title: '服务' },
    { id: 9, title: '社区' },
  ];
  keyLists = [
    { id: 1, name: '全部商品' },
    { id: 2, name: '空调' },
    { id: 3, name: '净水器' },
    { id: 4, name: '笔记本' },
    { id: 5, name: '小米11' },
    { id: 6, name: '黑鲨' },
    { id: 7, name: '手机' },
  ];
  mouseEnter = (e) => {
    console.log(e, 'itemmmm');
    this.setState({ hoverFlag: true });
  };
  mouseLeave = () => {
    this.setState({ hoverFlag: false });
  };
  onChange = (value) => {
    console.log(`selected ${value}`);
  };

  onBlur = () => {
    console.log('blur');
  };

  onFocus = () => {
    console.log('focus');
  };

  onSearch = (val) => {
    console.log('search:', val);
  };
  render() {
    const { hoverFlag } = this.state;
    return (
      <>
        <div className={styles.main}>
          <div className={styles.leftNav}>
            <div className={styles.logo}>
              <img src={imgUrl} alt='小米官网' />
            </div>
          </div>
          <div className={styles.mainNav}>
            <ul>
              {this.navLists.map((item, index) => {
                return (
                  <li key={index}>
                    <a href=''>
                      <span onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                        {' '}
                        {item.title}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className={styles.rightNav}>
            <div className={styles.search}>
              <Select
                showSearch
                style={{ width: 200 }}
                placeholder='手机'
                optionFilterProp='children'
                onChange={this.onChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onSearch={this.onSearch}
                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                {this.keyLists.map((item) => {
                  return (
                    <Option value={item.name} key={item.id}>
                      {item.name}
                    </Option>
                  );
                })}
              </Select>
            </div>
          </div>
        </div>
        <div className={styles.hoverContent} style={{ display: hoverFlag ? 'block' : 'none' }}>
          <ul className={styles.ul}>
            <li className={styles.liItem}>
              <div className={styles.top}>
                <img src={require('../../../assets/img/phone/civi.png').default} alt='' />
              </div>
              <div className={styles.cotent}>Xiaomi Civi</div>
              <div className={styles.bottom}>2599元起</div>
            </li>
            <li className={styles.liItem}>
              <div className={styles.top}>
                <img src={require('../../../assets/img/phone/phone1.webp').default} alt='' />
              </div>
              <div className={styles.cotent}>Xiaomi Mix4</div>
              <div className={styles.bottom}>4999元起</div>
            </li>
            <li className={styles.liItem}>
              <div className={styles.top}>
                <img src={require('../../../assets/img/phone/civi.png').default} alt='' />
              </div>
              <div className={styles.cotent}>Xiaomi Civi</div>
              <div className={styles.bottom}>2599元起</div>
            </li>
            <li className={styles.liItem}>
              <div className={styles.top}>
                <img src={require('../../../assets/img/phone/civi.png').default} alt='' />
              </div>
              <div className={styles.cotent}>Xiaomi Civi</div>
              <div className={styles.bottom}>2599元起</div>
            </li>
            <li className={styles.liItem}>
              <div className={styles.top}>
                <img src={require('../../../assets/img/phone/civi.png').default} alt='' />
              </div>
              <div className={styles.cotent}>Xiaomi Civi</div>
              <div className={styles.bottom}>2599元起</div>
            </li>
            <li className={styles.liItem}>
              <div className={styles.top}>
                <img src={require('../../../assets/img/phone/civi.png').default} alt='' />
              </div>
              <div className={styles.cotent}>Xiaomi Civi</div>
              <div className={styles.bottom}>2599元起</div>
            </li>
          </ul>
        </div>
        <div>1234567897</div>
      </>
    );
  }
}
