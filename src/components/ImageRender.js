import React from 'react';
import Session from '../StoreImageId';
import Modal from 'react-modal';
import {History} from '../routes/routes';
import PropTypes from 'prop-types';

export default class ImageRender extends React.Component{
  render(){
    return (
      <Modal isOpen={this.props.selected} contentLabel="Image">
      <div className="image__details">
        <a href={this.props.image.src} target="_blank"> <img className="image--modal" alt={this.props.image.title} src={this.props.image.src}/></a>
        <h2>{this.props.image.title}</h2>
        <p>{this.props.image.description}</p>
        <button className="button" onClick={()=>{
          History.replace('/gallery');
          Session.set(undefined);
        }}>Go back</button>
      </div>
    </Modal>
    );
  }
}

ImageRender.propTypes={
  image:PropTypes.object.isRequired,
  selected:PropTypes.bool.isRequired
};
