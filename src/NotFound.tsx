import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{/* <i>{this.error.statusText || this.error.message}</i> */}</p>
      </div>
    );
  }
}
