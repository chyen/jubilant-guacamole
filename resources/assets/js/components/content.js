import React from 'react';
import Menu from './Menu';

export default class Content extends React.Component{
  render() {
    return (
      <div className={`col-sm-12 ${this.props.className}`}>
        <Menu />
        <div className='marny-rynek'>Content</div>
      </div>
    );
  };

}
