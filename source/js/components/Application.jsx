import React from 'react';
import ListItem from './ListItem.jsx';
import data from '../../data.json';

let Application = React.createClass({
  createListItem: function (listItem) {
    return <ListItem listItem={listItem} key={listItem.id} />;
  },

  createListItems: function (listItems) {
    return listItems.map(this.createListItem);
  },

  render: function () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            
            <ul>
              {this.createListItems(data.listItems)}
            </ul>
          
          </div>
        </div>
      </div>
    );
  }
});

export default Application;
