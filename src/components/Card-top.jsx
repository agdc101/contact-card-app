/* eslint-disable react/prop-types */
import classes from "../assets/modules/ContactCardTop.module.css";

const CardTop = (props) => {
  const arrowClass = props.showDetails
    ? classes["arrow-spin-down"]
    : classes["arrow-spin-up"];

  return (
    <div onClick={props.handleArrowClick} className={classes["card-top"]}>
      <div className={classes["card-top-inner"]}>
        <img
          className={classes["prof-pic"]}
          width="80"
          height="80"
          src={props.picture}
          alt="user-male-skin-type-7"
        />
        <div className={classes["contact-info"]}>
          <h4>{props.name}</h4>
          <p>07415 715 715</p>
        </div>
      </div>
      <img
        className={arrowClass}
        width="25"
        height="25"
        src="https://img.icons8.com/ios/50/collapse-arrow--v2.png"
        alt="collapse-arrow--v2"
      />
    </div>
  );
};

export default CardTop;
