import React from 'react';
import {Link} from 'react-router';

import styles from './Header.less';

class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <header className={styles.header}>
          <span>技术团</span>
      </header>
    );
  }
}

export default Header;