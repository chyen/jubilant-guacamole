import React from 'react';

export default class Menu extends React.Component{
  render() {
    return (
      <div className={this.props.className}>
        <div>Dashboard</div>
        <div>Menu</div>
        <div>Kontakt</div>
      </div>
    );
  };

}

Menu.displayName = 'Menu';

Menu.propTypes = {
  className: React.PropTypes.string
};

Menu.defaultProps = {
  className: 'nav-menu'
};
