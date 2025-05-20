import { ChevronRight } from "lucide-react";
import {
  bannercont,
  bannerimgleft,
  bannerimgright,
  bannermessagecont,
  bannertext,
  textmain,
  viewmorebtn,
  viewmoretxt,
} from "../styles/Banner";
const Banner = () => {
  return (
    <div style={bannercont}>
      <div style={bannermessagecont}>
        <p style={bannertext}>Pyridoxine Vitamin B6</p>
        <h5 style={textmain}>Vitamins & Supplements</h5>
        <button style={viewmorebtn}>
          <span style={viewmoretxt}>View more</span>
          <ChevronRight color="#ffff" size={18} />
        </button>
      </div>
      <img
        src="/image-15.svg"
        alt=""
        style={bannerimgleft}
        className="bannerimgleft"
      />
      <img
        src="/image-14.svg"
        alt=""
        style={bannerimgright}
        className="boxmockup"
      />
    </div>
  );
};

export default Banner;
