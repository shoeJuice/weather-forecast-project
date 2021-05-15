'use strict';

const e = (<h1>
    It's working!!!!
</h1>
);

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {

    return e;
  }
}

const domContainer = document.querySelector('#myDOM');
ReactDOM.render(<LikeButton />, domContainer);