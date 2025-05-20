import {
  allcat,
  h3encapsulator,
  h3wrapper,
  innerallcat,
  innercattext,
  searchfield,
  searchfieldInput,
  sidebutton,
} from "../styles/Header3";
import { BsTextLeft } from "react-icons/bs";
import { Search } from "lucide-react";

const Header3 = () => {
  return (
    <div style={h3encapsulator} className="h3encapsulator">
      <div style={h3wrapper} className="h3wrapper">
        {/* ALL CATEGORIES */}
        <div style={allcat} className="d-none d-sm-flex">
          <div style={innerallcat}>
            <p style={innercattext} className="pt-sans-bold-custom ">
              <span className="pe-1 pb-1">
                <BsTextLeft size={15} color="#184363" />
              </span>
              All Categories
            </p>
          </div>
        </div>

        {/* SEARCH FIELDS */}
        <div style={searchfield}>
          <input
            type="text"
            placeholder="What are you looking for?"
            style={searchfieldInput}
            className="searchfieldInput"
          ></input>
          <button
            style={sidebutton}
            className="text-center d-flex justify-content-center align-items-center px-0 "
          >
            <Search
              style={{
                maxWidth: "2rem",
              }}
              color="white"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;
