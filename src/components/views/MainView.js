import React, { Component } from 'react';
import Qs from 'qs';
import Gallery from 'react-grid-gallery';
import images from '../common/gallery';

class MainView extends Component {
  constructor(props) {
    super(props);
    const {
      mode = 'default',
    } = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
    this.state = { mode };
  }

  renderImages = (mode) => {
    if (mode === 'default') {
      return images;
    }
    return images.filter(image => image.kind === mode);
  }

  render() {
    const { mode } = this.state;
    return (
      <div className="main-view">
        <Gallery images={this.renderImages(mode)} />
      </div>
    );
  }
}

export default MainView;
