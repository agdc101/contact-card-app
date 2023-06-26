/* eslint-disable react/prop-types */
import classes from '../assets/modules/Header.module.css';

const Header = (props) => {

  return (
    <header className={classes['header']}>
      <div className={classes['top-header']}>
        <div className={classes['top-header-menu']}>
        <img width="30" height="30" src="https://img.icons8.com/ios-filled/50/ffffff/menu-rounded.png" alt="menu-rounded"/>
          <span className={classes.span}>All Contacts</span>
        </div>
        <div>
          <img width="30" height="30" src="https://img.icons8.com/color/48/user-male-skin-type-7.png" alt="user-male-skin-type-7"/>
        </div>
      </div>
      <div className={classes['bottom-header']}>
        <span>{props.noOfContacts} contacts ({props.favs} favs)</span>
        <div className={classes['dropdown']}>
          <label htmlFor='sortBy'>Order by: </label>
          <select onChange={props.handleSortBy} defaultValue={'select option'} id='sortBy'>
            <option disabled value={'select option'}>Select your option</option>
            <option>Name</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export default Header;
