import React from 'react';
import Button from 'react-bootstrap/Button';

class UpdateButton extends React.Component {

  handleClick = () => {
    this.props.bookForUpdate(this.props.book);
    this.props.updateForm();
  }

  render(){
    return (
        <Button variant="dark" size='sm' style={{opacity: 1}} onClick={this.handleClick}>Update</Button>
      
    ) 
  }
}

export default UpdateButton;