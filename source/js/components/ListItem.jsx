import React from 'react';

let ListItem = React.createClass({
  render: function () {
    return (
      <li>{this.props.listItem.name}</li>
    );
  }
});

export default ListItem;
