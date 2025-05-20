import {
  BestSellingProductsHeader,
  discountedPrice,
  nonDiscountedPrice,
  oldPrice,
} from "../styles/BestSellingCard";
import SellingProductsCard from "./SellingProductsCard";

const BestSellingProducts = () => {
  return (
    <div
      className="best-selling-product-encap mt-4 pt-5"
      style={{
        maxWidth: "123.95rem",
        margin: "0 auto",
        // backgroundColor: "red",
      }}
    >
      <h5 style={BestSellingProductsHeader} className="pb-5">
        Best Selling Products
      </h5>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 pb-2 justify-content-center g-4">
        <div className="col d-flex justify-content-center  ">
          <SellingProductsCard
            salebadge={false}
            bspimg={"/product66.svg"}
            category={"Protein"}
            product={"Nutren Diabetes Vanilla"}
            price={"$34.50"}
            pricestyle={nonDiscountedPrice}
            prevPrice={""}
            prevPriceStyle={{}}
          />
        </div>
        <div className="col d-flex justify-content-center ">
          <SellingProductsCard
            salebadge={true}
            bspimg={"/product76.svg"}
            category={"Herbs"}
            product={"Henry Blooms One Night"}
            price={"$39.00"}
            pricestyle={discountedPrice}
            prevPrice={"$44.00"}
            prevPriceStyle={oldPrice}
          />
        </div>
        <div className="col d-flex justify-content-center pe-0 ">
          <SellingProductsCard
            salebadge={false}
            bspimg={"/product43.svg"}
            category={"Pets"}
            product={"Spring Leaf Kids Fish Oil 750mg"}
            price={"$24.95"}
            pricestyle={nonDiscountedPrice}
            prevPrice={""}
            prevPriceStyle={{}}
          />
        </div>
        <div className="col d-flex justify-content-center ">
          <SellingProductsCard
            salebadge={true}
            bspimg={"/product64.svg"}
            category={"Pets"}
            product={"Nordic Naturals Arctic-D Cod"}
            price={"$37.45"}
            pricestyle={discountedPrice}
            prevPrice={"$42.95"}
            prevPriceStyle={oldPrice}
          />
        </div>
        <div className="col d-flex justify-content-center ">
          <SellingProductsCard
            salebadge={true}
            bspimg={"/product16.svg"}
            category={"Beauty"}
            product={"Nair Precision Facial Hair"}
            price={"$4.40"}
            pricestyle={discountedPrice}
            prevPrice={"$5.50 "}
            prevPriceStyle={oldPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default BestSellingProducts;
