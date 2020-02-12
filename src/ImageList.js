import React, { Component } from 'react'
import images from "./data.js";
import ImageItem from "./ImageItem.js";

export default class ImageList extends Component {
    render() {
        console.log(this.props.selected)
        const imageNodes = images
        .filter(image => {
        if (!this.props.selected) return true;

        return image.keyword === this.props.selected;
    })
        .map(image => <ImageItem image={image} />);
        return(
            <ul>
                {imageNodes}
            </ul>
        )
    };
}