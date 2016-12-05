import React from 'react';

export default class Header extends React.Component{
  render() {
    return (
      <div className={ "header" }>
        <div className={ `col-sm-8 ${this.props.className}` }>
          Header
        </div>
        <div className={ 'col-sm-4 profile' }>Profile</div>
      </div>
    );
  };

}
