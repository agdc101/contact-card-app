import React, {useState} from 'react';
import CardTop from './Card-top';
import classes from '../assets/modules/ContactCard.module.css';
import CardBottom from './Card-bottom';

const ContactCards = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  function handleArrowClick() {
    setShowDetails(!showDetails);
  }

  return (
    <div className={classes['card']}>
      <CardTop 
        showDetails={showDetails} 
        handleArrowClick={handleArrowClick} 
        name={props.name} 
        picture={props.picture} 
      />
      <CardBottom 
        showDetails={showDetails} 
        street={props.street} 
        city={props.city} 
        state={props.state} 
        post={props.post} p
        hone={props.phone} 
        email={props.email} 
        id={props.id} 
        handleFavClick={props.handleFavClick}
        />
    </div>
  );
}

export default ContactCards;
