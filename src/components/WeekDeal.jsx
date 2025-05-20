import {
  countdownbox,
  ctdwnWrapper,
  dotwencap,
  dotwtext,
  dptwcountdown,
  leftprodcustombadge,
  leftproduct,
  leftproductdetails,
  leftproductimg,
  numberitem,
  prodlistItems,
  prodname,
  prodprice,
  productswrapper,
  selectoption,
  textitem,
} from "../styles/WeekDeal";
import { ShoppingCart, Check } from "lucide-react";

const WeekDeal = () => {
  return (
    <div style={dotwencap}>
      <div style={ctdwnWrapper}>
        <div style={dotwtext}>Deal Of The Week</div>
        <div className=" text-center" style={dptwcountdown}>
          <div style={countdownbox}>
            <p style={numberitem}>71</p>
            <p style={textitem}>Days</p>
          </div>
          <div style={countdownbox}>
            <p style={numberitem}>19</p>
            <p style={textitem}>Hours</p>
          </div>
          <div style={countdownbox}>
            <p style={numberitem}>59</p>
            <p style={textitem}>Minutes</p>
          </div>
          <div style={countdownbox}>
            <p style={numberitem}>57</p>
            <p style={textitem}>Seconds</p>
          </div>
        </div>
      </div>
      <div style={productswrapper}>
        <div
          className="leftproduct flex-wrap flex-sm-nowrap"
          style={leftproduct}
        >
          <div style={leftproductimg} className="bleftproductimg">
            <img
              src="/product42.svg"
              alt=""
              className="img-fluid w-100 "
              style={{
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            />
            <h6 className="badge" style={leftprodcustombadge}>
              Sale
            </h6>
          </div>
          <div style={leftproductdetails}>
            <h5 style={prodname}>Vitamin C 500mg Sugarless</h5>
            <h5 style={prodprice}>$16.00 – $35.00</h5>
            <ul style={prodlistItems}>
              <li>
                <Check color="#39CB74" size={8} />
                <span className="mx-3">3 cleaning programs</span>
              </li>
              <li>
                <Check color="#39CB74" size={8} />
                <span className="mx-3"> Digital display</span>
              </li>
              <li>
                <Check color="#39CB74" size={8} />
                <span className="mx-3"> Memory for 1 user</span>
              </li>
            </ul>{" "}
            <br />
            <button style={selectoption}>
              <ShoppingCart size={18} color="#184363" />
              <span className="mt-1"> Select options</span>
            </button>
          </div>
        </div>

        <div
          className="rightproduct flex-wrap flex-sm-nowrap"
          style={leftproduct}
        >
          <div style={leftproductimg} className="bleftproductimg">
            <img
              src="/product74.svg"
              alt=""
              className="img-fluid w-100"
              style={{
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            />
          </div>
          <div style={leftproductdetails}>
            <h5 style={prodname}>Insulin Lispro Kwikpen</h5>
            <h5 style={prodprice}>$18.88 – $32.88</h5>
            <ul style={prodlistItems}>
              <li>
                <Check color="#39CB74" size={8} />
                <span className="mx-3">3 cleaning programs</span>
              </li>
              <li>
                <Check color="#39CB74" size={8} />
                <span className="mx-3"> Digital display</span>
              </li>
              <li>
                <Check color="#39CB74" size={8} />
                <span className="mx-3"> Memory for 1 user</span>
              </li>
            </ul>{" "}
            <br />
            <button style={selectoption}>
              <ShoppingCart size={18} color="#184363" />
              <span className="mt-1"> Select options</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekDeal;
