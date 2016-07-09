import React from 'react';
import {Link} from 'react-router';

import styles from './Footer.less';

class Footer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <footer className={styles.footer}>
        <ul className={styles.footer_ul}>
          <li className={styles.footer_ul_li}>
            <Link to='/project' className={styles.footer_ul_li_link}>
              <i className="fa fa-tasks" aria-hidden="true"></i>
              <span>项目</span>
            </Link>
          </li>
          <li className={styles.footer_ul_li}>
            <Link to='/service' className={styles.footer_ul_li_link}>
              <i className="fa fa-rocket" aria-hidden="true"></i>
              <span>服务</span>
            </Link>
          </li>
          <li className={styles.footer_ul_li}>
            <Link to='/study' className={styles.footer_ul_li_link}>
              <i className="fa fa-code" aria-hidden="true"></i>
              <span>培训</span>
            </Link>
          </li>
          <li className={styles.footer_ul_li}>
            <Link to='/personal' className={styles.footer_ul_li_link}>
              <i className="fa fa-user" aria-hidden="true"></i>
              <span>我</span>
            </Link>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;