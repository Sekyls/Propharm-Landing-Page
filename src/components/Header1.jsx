import { MapPin, ChevronDown, PhoneCall } from "lucide-react";
import { FaRegUser } from "react-icons/fa";
import {
  leftwrapper,
  middlewrapper,
  rightwrapper,
  wrapper,
} from "../styles/Header1";
const Header1 = () => {
  return (
    <div
      className="container-fluid"
      style={{ borderBottom: "0.1px solid rgb(225, 225, 225)" }}
    >
      <div className="H1-wrapper" style={wrapper}>
        {/* LEFT WRAPPER */}
        <div className="leftwrapper" style={leftwrapper}>
          <div style={{ paddingRight: "0.6rem" }}>
            {" "}
            <MapPin color="#15A9E3" size={16} />{" "}
          </div>
          <p className="pt-sans-regular text-center">
            60 Washington East, New York, NY 10012, United States
          </p>
        </div>

        {/* MIDDLE WRAPPER */}
        <div className="middlewrapper" style={middlewrapper}>
          <div
            style={{
              paddingRight: "0.7rem",
            }}
          >
            {" "}
            <PhoneCall color="#15A9E3" size={16} />
          </div>
          <p className="pt-sans-regular text-center">
            Sales & Service Support / 999-456-6782
          </p>
        </div>

        {/* RIGHT WRAPPER */}
        <div className="rightwrapper" style={rightwrapper}>
          <div
            style={{
              display: "flex",
            }}
          >
            <p className="pt-sans-bold text-center">EN</p>
            <div style={{ paddingRight: "1rem" }}>
              <ChevronDown
                color="#56778F"
                style={{ width: "2rem", height: "2rem" }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <p className="pt-sans-bold text-center">$ USD</p>
            <div style={{ paddingRight: "1rem" }}>
              <ChevronDown
                color="#56778F"
                style={{ width: "2rem", height: "2rem" }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <div style={{ padding: "0.15rem" }}>
              <FaRegUser size={16} />
            </div>
            <p className="pt-sans-bold text-center">My account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
