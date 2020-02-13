import React, { Component } from 'react'
import images from "./data.js";
import ImageItem from "./ImageItem.js";

export default class ImageList extends Component {
    render() {
        console.log(this.props)
        const imageNodes = images
        .filter(image => {
        if (!this.props.selected) return true;
        return (image.keyword === this.props.selected);
    })
        .filter(image => {
                if (!this.props.horns) return true;
                return (image.horns === Number(this.props.horns));   
        })
        .map(image => <ImageItem image={image} />);
        return(
            <ul>
                {imageNodes}
            </ul>
        )
    };
}