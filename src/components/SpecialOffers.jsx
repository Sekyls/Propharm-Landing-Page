import { ChevronRight } from "lucide-react";
import {
  boldheading,
  btntext,
  card1,
  card2,
  cardscontainer,
  encap,
  heading,
  pricebadge,
  pricelead,
  regularheading,
  shownowbtn,
} from "../styles/SpecialOffers";
const SpecialOffers = () => {
  return (
    <div style={encap}>
      <h1 className="text-center" style={heading}>
        Special Offers
      </h1>
      <div style={cardscontainer}>
        <div className="leftoleftffer" style={card1}>
          <h5 className="badge text-center" style={pricebadge}>
            From $0.99
          </h5>
          <h5 style={boldheading}>Breathable</h5>
          <h5 style={regularheading}>Face Mask</h5>
          <button style={shownowbtn}>
            <span style={btntext}>Show now</span>{" "}
            <ChevronRight color="white" size={8} />
          </button>
        </div>
        <div className="right" style={card2}>
          <h5 style={pricelead}>From $9.99</h5>
          <h5 style={boldheading}>Covid 19 pack</h5>
          <h5 style={regularheading}>Get it now 45% Off</h5>
          <button style={shownowbtn}>
            <span style={btntext}>Show now</span>{" "}
            <ChevronRight color="white" size={8} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
