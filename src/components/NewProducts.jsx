import {
  activeprice,
  addtocarttxt,
  cartbtn,
  chevroncontainer,
  fadedprice,
  headingtext,
  headingwrapper,
  npencap,
  oldprodprice,
  prodbadge,
  prodcard,
  prodcategory,
  prodimage,
  prodname,
} from "../styles/NewProducts";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";

const NewProducts = () => {
  const newProductsList = [
    {
      id: 1,
      image: "/product55.svg",
      category: "Vitamins",
      name: "Buscopan Forte Tab 20mg X 10",
      newprice: "$8.95",
      oldprice: "",
      discount: false,
      sale: false,
    },
    {
      id: 2,
      image: "/product660.svg",
      category: "Protein",
      name: "Nutren Diabetes Vanilla",
      newprice: "$34.50",
      oldprice: "",
      discount: false,
      sale: false,
    },
    {
      id: 3,
      image: "/product80.svg",
      category: "Protein",
      name: "FatBlaster Keto-Fit Whey Protein",
      newprice: "$23.95",
      oldprice: "",
      discount: false,
      sale: false,
    },
    {
      id: 4,
      image: "/product48.svg",
      category: "Sports Nutrition",
      name: "Nature’s Way Instant Natural",
      newprice: "$11.15",
      oldprice: "$18.50",
      discount: true,
      sale: true,
    },
    {
      id: 5,
      image: "/product77.svg",
      category: "Sports Nutrition",
      name: "Musashi Intra Workout",
      newprice: "$39.95",
      oldprice: "",
      discount: false,
      sale: false,
    },
    {
      id: 6,
      image: "/product59.svg",
      category: "Vitamins",
      name: "Gastro Soothe Tab 10mg X 20",
      newprice: "$5.95",
      oldprice: "",
      discount: false,
      sale: false,
    },
    {
      id: 7,
      image: "/product61.svg",
      category: "Protein",
      name: "Tropeaka Lean Protein Salted",
      newprice: "$34.15",
      oldprice: "$41.95",
      discount: true,
      sale: true,
    },
    {
      id: 8,
      image: "/product67.svg",
      category: "Supplements",
      name: "Protein Supplies Australia",
      newprice: "$24.18",
      oldprice: "$35.95",
      discount: true,
      sale: true,
    },
    {
      id: 9,
      image: "/product37.svg",
      category: "Sports Nutrition",
      name: "Vital Protein Strawberry",
      newprice: "$40.01",
      oldprice: "$43.95",
      discount: true,
      sale: true,
    },
    {
      id: 10,
      image: "/product25.svg",
      category: "Sports Nutrition",
      name: "Musashi 100% Whey Vanilla",
      newprice: "$40.15",
      oldprice: "$45.95",
      discount: true,
      sale: true,
    },
  ];
  return (
    <div className="newProducts" style={npencap}>
      <div className="heading " style={headingwrapper}>
        <h1 style={headingtext}>New Products</h1>
        <div className="d-flex text-center">
          <div
            className="chevronL d-flex align-items-center justify-content-center me-2"
            style={chevroncontainer}
          >
            <ChevronLeft color="#184363" size={18} />
          </div>
          <div
            className="chevronR d-flex align-items-center justify-content-center"
            style={chevroncontainer}
          >
            <ChevronRight color="#184363" size={18} />
          </div>
        </div>
      </div>
      <div className="row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2  d-flex g-5 justify-content-center gap-4">
        {newProductsList.map((product) => {
          return (
            <div className="col  px-0" key={product.id} style={prodcard}>
              <img
                className="w-100"
                src={product.image}
                alt=""
                style={prodimage}
              />
              {product.sale ? (
                <h5 className="badge" style={prodbadge}>
                  Sale
                </h5>
              ) : null}
              <h5 style={prodcategory}>{product.category}</h5>
              <h5 style={prodname}>{product.name}</h5>
              {product.discount ? (
                <h5 style={fadedprice}>
                  <span style={oldprodprice} className="pe-2 pt-5">
                    {product.oldprice}
                  </span>
                  {product.newprice}
                </h5>
              ) : (
                <h5 style={activeprice}>{product.newprice}</h5>
              )}
              <button style={cartbtn}>
                <ShoppingCart color="#184363" size={18} />
                <span style={addtocarttxt}>Add to cart</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewProducts;
