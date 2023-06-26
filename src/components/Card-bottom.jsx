import React, {useRef} from 'react';
import classes from '../assets/modules/ContactCardBottom.module.css';
import { CSSTransition } from 'react-transition-group';
import '../assets/animate.css'

const CardBottom = (props) => {
  const nodeRef = useRef(null);
  return (
    <CSSTransition nodeRef={nodeRef} in={props.showDetails} timeout={450} classNames="card-details" unmountOnExit >
      <div ref={nodeRef} className={classes['card-bottom']}>
        <div className={classes['card-details']}>
          <div className={classes['address']}>
            <h4>Address: </h4>
            <p>{props.street}</p>
            <p>{props.city}</p>
            <p>{props.state}</p>
            <p>{props.post}</p>
          </div>
          <div className={classes['other-info']}>
            <p><b>Landline: </b>{props.phone}</p>
            <p><b>Email: </b>{props.email}</p>
          </div>
        </div>
        <div className={classes['fav-checkbox']}>
          <label htmlFor="fav">Add to Favourites:  </label>
          <input onChange={props.handleFavClick} data-attr={props.id} className={classes['fav']} type="checkbox" id="fav" name="fav"/>
        </div>
      </div>
    </CSSTransition>
  );
}

export default CardBottom;
