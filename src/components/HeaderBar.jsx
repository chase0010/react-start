import React from 'react';
import {Link} from 'react-router';

import styles from './HeaderBar.less';

class HeaderBar extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return (
      <div className={styles.header_bar}>
       	<ul>
       		<li>
       			<Link to="#">
					     <i className="fa fa-reorder" aria-hidden="true"></i>
               <span>编辑</span>
       			</Link>
       		</li>
       		<li>
       			<Link to="#">
					     <i className="fa fa-photo" aria-hidden="true"></i>
               <span>图片</span>
       			</Link>
       		</li>
       		<li>
       			<Link to="/lists">
					     <i className="fa fa-search" aria-hidden="true"></i>
               <span>列表</span>
       			</Link>
       		</li>

       	</ul>
      </div>
    );
  }
}

export default HeaderBar;