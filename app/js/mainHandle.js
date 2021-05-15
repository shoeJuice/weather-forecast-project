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
    const j = (<h1>
        Hi yall! I'm Remy and I'm using JS for the first time!
    </h1>)
    return (<h1>
        Hi yall! I'm Remy and I'm using JS for the first time!
    </h1>);
  }
}

const domContainer = document.querySelector('#myDOM');
ReactDOM.render(<LikeButton />, domContainer);