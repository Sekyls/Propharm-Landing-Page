import { FaGreaterThan } from "react-icons/fa6";
import {
  cardbutton,
  cardheading,
  cardul,
  shelfcardencap,
} from "../styles/StylesCard";

const ShelfCard = ({ listheading, l1, l2, l3, l4, imgsrc, cardimgStyle }) => {
  return (
    <>
      <div style={shelfcardencap}>
        <h6 style={cardheading}>{listheading}</h6>
        <ul style={cardul} className="custom-ul">
          <li>{l1}</li>
          <li>{l2}</li>
          <li>{l3}</li>
          <li>{l4}</li>
        </ul>
        <button style={cardbutton} className="">
          <p
            style={{
              lineHeight: "22px",
              color: "white",
              fontFamily: "PT Sans, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "1.5rem",
              padding: "0px",
              margin: "0px",
            }}
          >
            View all <FaGreaterThan color="white" size={10} />
          </p>
        </button>
        <img src={imgsrc} alt="" style={cardimgStyle} />
      </div>
    </>
  );
};

export default ShelfCard;
