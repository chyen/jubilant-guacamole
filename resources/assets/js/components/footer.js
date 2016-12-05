import React from 'react';

export default class Footer extends React.Component{
  render() {
    return (
      <footer
        className={`col-sm-12 ${this.props.className}`}
      >Footer</footer>
    );
  };

}
