import React from 'react';
import TopNav from './compoents/topNav';
import styles from './index.module.less';
export default class Content extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <TopNav></TopNav>
      </div>
    );
  }
}
