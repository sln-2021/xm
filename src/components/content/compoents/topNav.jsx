import React from 'react';
import styles from './topNav.module.less';
import imgUrl from '../../../assets/img/logomi2.png';
import { Input } from 'antd';

const { Search } = Input;
export default class TopNav extends React.Component {
  state = {
    keyVisible: false,
    inputValue: '',
  };

  navLists = [
    { id: 1, title: '小米手机' },
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
  onSearch = () => {};
  inputClick = () => {
    const { keyVisible } = this.state;
    this.setState({ keyVisible: !keyVisible });
  };
  onBlur = () => {
    this.setState({ keyVisible: false });
  };
  setInputValue = (name) => {
    this.setState({ inputValue: name });
  };
  render() {
    const { keyVisible, inputValue } = this.state;
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
              {this.navLists.map((item) => {
                return (
                  <li>
                    <a href=''>
                      <span> {item.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>{keyVisible === true}</div>
          <div className={styles.rightNav}>
            <div className={styles.search}>
              <Search
                placeholder='小米'
                onSearch={this.onSearch}
                size='large'
                onClick={this.inputClick}
                className={styles.inputSearch}
                onBlur={this.onBlur}
                value={inputValue}
              />
            </div>
            <div className={keyVisible ? `${styles.keyLists}` : `${styles.hide}`}>
              <ul>
                {this.keyLists.map((item) => {
                  return (
                    <li onClick={() => this.setInputValue(item.name)} key={item.id}>
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
