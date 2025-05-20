import {
  categorieswrapper,
  divor,
  filterencap,
  filterwrapper,
  selectProduct,
  selects,
  shopnow,
  sku,
} from "../styles/Filter";

const Filter = () => {
  return (
    <div style={filterencap} className="my-1 py-1 d-none d-sm-flex  ">
      <form
        action=""
        style={filterwrapper}
        className="d-flex justify-content-center"
      >
        <h6
          style={selectProduct}
          className="pt-sans-bold-custom my-0 d-none d-lg-block "
        >
          Select a product
        </h6>
        <div style={categorieswrapper} className="px-3">
          <p style={{ color: "#184363" }} className="pt-sans-regular my-0">
            Categories
          </p>
          <select name="Category" id="" style={selects}>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div style={categorieswrapper} className="px-3">
          <p style={{ color: "#184363" }} className="pt-sans-regular my-0">
            Brand
          </p>
          <select name="Brand" id="" style={selects}>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
        <div className="pt-sans-bold d-none d-lg-block" style={divor}>
          OR
        </div>
        <input
          type="text"
          placeholder="Enter SKU"
          style={sku}
          className="sku d-none d-lg-block"
        />
        <button type="submit" style={shopnow}>
          Shop now
        </button>
      </form>
    </div>
  );
};

export default Filter;
