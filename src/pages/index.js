import React from 'react';
import request from 'umi-request';
import styles from './index.css';

request('/api/test')
  .then(res => {
    console.log(JSON.stringify(res));
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    console.log('finally');
  })

export default class Index extends React.Component {
  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
          <li>
            <a href="https://umijs.org/guide/getting-started.html">
              Getting Started
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
