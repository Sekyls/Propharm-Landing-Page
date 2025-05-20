import { Link } from "react-router-dom";
import { Send, MapPin } from "lucide-react";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import {
  accepttxt,
  copytxt,
  footercont1,
  footergrid,
  inputemail,
  lastfootercont,
  lastfootercontwrapper,
  leftcol,
  linebreak,
  middlecol,
  middlecollinks,
  middleconts,
  middlecontsheadings,
  rightcol,
  rightcolemailtxt,
  rightcolheading,
  rightcolloccont,
  rightcolloctxt,
  secondmiddlecolcont,
  socialmediabox,
  staytuned,
  subscribebtn,
  subscribetxt,
} from "../styles/Footer";
const Footer = () => {
  return (
    <>
      <div style={footercont1}>
        <div
          style={footergrid}
          className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 footer-grid"
        >
          <div className="col" style={leftcol}>
            <div
              className="mb-4  d-flex align-items-center gap-3"
              style={{ width: "200px", height: "46px" }}
            >
              <div style={{ width: "48px", height: "46px" }}>
                <img src="/logo-white.png" alt="" />
              </div>
              <div style={{ width: "140px", height: "28px" }}>
                <img src="/logo-name.png" alt="" />
              </div>
            </div>
            <p style={staytuned}>
              Stay tuned for latest updates and new features
            </p>
            <div className="d-flex mt-5 mb-5">
              <input
                type="text"
                style={inputemail}
                placeholder="Email address"
                className="Email-address"
              />
              <button style={subscribebtn} className="gap-2">
                <Send size={15} color="#ffff" className="mt-1" />
                <span style={subscribetxt}>Subscribe</span>
              </button>
            </div>
            <div className="d-flex gap-2 text-light">
              <input type="checkbox" className="styled-checkbox" />
              <p style={accepttxt}>
                I accept terms and conditions & privacy policy
              </p>
            </div>
          </div>
          <div className="col text-light Fmiddlecolumn" style={middlecol}>
            <div style={middleconts}>
              <h1 style={middlecontsheadings}>Information</h1>
              <Link style={middlecollinks}>About us</Link>
              <Link style={middlecollinks}>Delivery information</Link>
              <Link style={middlecollinks}>Privacy Policy</Link>
              <Link style={middlecollinks} className="mb-2">
                Sales
              </Link>
              <Link style={middlecollinks}>Terms & Conditions</Link>
            </div>
            <div style={secondmiddlecolcont}>
              <h1 style={middlecontsheadings}>Account</h1>
              <Link style={middlecollinks}>Dashboard</Link>
              <Link style={middlecollinks}>My orders</Link>
              <Link style={middlecollinks}>Account details</Link>
              <Link style={middlecollinks} className="mb-2">
                Returns
              </Link>
              <Link style={middlecollinks}>Wishlist</Link>
            </div>
          </div>
          <div className="col text-light" style={rightcol}>
            <h1 style={rightcolheading}>About / Contacts</h1>
            <div style={rightcolloccont}>
              <MapPin size={20} color="#ffff" />
              <p style={rightcolloctxt}>
                70 Washington Square South, New York, NY 10012, United States
              </p>
            </div>
            <div style={rightcolloccont}>
              <TfiEmail color="white" size={20} />
              <p style={rightcolemailtxt} className="pt-3">
                Pavanvkoli@gmail.com
              </p>
            </div>
            <div className="d-flex gap-4 mt-5">
              <div style={socialmediabox}>
                <FaFacebookF color="white" size={16} />
              </div>
              <div style={socialmediabox}>
                <LuInstagram color="white" size={16} />
              </div>
              <div style={socialmediabox}>
                <FaLinkedinIn color="white" size={16} />
              </div>
              <div style={socialmediabox}>
                <FaXTwitter color="white" size={16} />
              </div>
              <div style={socialmediabox}>
                <IoLogoYoutube color="white" size={16} />
              </div>
            </div>
          </div>
        </div>
        <hr style={linebreak} />
      </div>
      <div style={lastfootercont}>
        <div
          style={lastfootercontwrapper}
          className="text-light lastfootercontwrapper"
        >
          <p style={copytxt}>Copyright 2024 Propharm. All Rights Reserved</p>
          <img src="/payments2.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
