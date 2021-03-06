import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';

class Banner extends Component {
    render() {
        return (
            <ReactSwipe className="carousel">
                {
                    this.props.sliders.length ? this.props.sliders.map((item, index) => (
                        <div key={index}>
                            <img src={item} />
                        </div>
                    )) : ''
                }
            </ReactSwipe>
        );
    }
}

export default Banner;