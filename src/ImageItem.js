import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {
        const image = this.props.image;

        return (
                <li class="images-item">
                    <div class="info-container">
                    <h2>{image.title}</h2>
                    <p class="images-description">${image.description}</p>
                    </div>
                    <div class="images-container">
                    <img src={image.url} alt={image.title} />
                    </div>
                    <p class="horns">{image.horns}</p>
                </li>
        );
    }
}