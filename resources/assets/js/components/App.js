import React from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';


export default class App extends React.Component {
  render () {
    console.log('RENDER');
    return (
      <div className={ 'wrapper' }>
        <Header
          className={'header'}
        />
        <Content
          className={'content'}
        />
        <Footer
          className={'footer'}
        />
      </div>
    );
  }
}
