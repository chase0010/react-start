// src/component/root.jsx
import React from 'react';
import ListItem from './ListItem.jsx';

const lists = [
      { _id: 1, text: 'This is list 1' },
      { _id: 2, text: 'This is list 2' },
      { _id: 3, text: 'This is list 3' },
    ];

export default class Lists extends React.Component {

  renderList() {
    return lists.map((list) => (
      <ListItem key={list._id} list={list} />
    ));
  }


  render() {
    return (
      <div>
        <ul>
        {this.renderList()}
        </ul>
      </div>
    );
  }
}

