import { ShoppingCart } from "lucide-react";
import {
  badgeStyle,
  bestspImage,
  cardStyle,
  cardText,
  cardTitle,
  cartBtn,
} from "../styles/BestSellingCard";
const SellingProductsCard = ({
  salebadge,
  bspimg,
  category,
  product,
  price,
  pricestyle,
  prevPrice,
  prevPriceStyle,
}) => {
  return (
    <div className="card" style={cardStyle}>
      {salebadge && (
        <h6
          className="badge text-light text-center custombadge"
          style={badgeStyle}
        >
          Sale
        </h6>
      )}
      <img
        src={bspimg}
        className="card-img-top img-fluid"
        alt="..."
        style={bestspImage}
      />
      <div className="card-body">
        <p className="card-text" style={cardText}>
          {category}
        </p>
        <h5 className="card-title" style={cardTitle}>
          {product}
        </h5>
        <p className="card-text" style={pricestyle}>
          <span style={prevPriceStyle}>{prevPrice}</span> {price}
        </p>
        <button className="btn w-100 text-center " style={cartBtn}>
          <ShoppingCart size={18} color="#184363" />
          <span className="pt-sans-bold px-2"> Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default SellingProductsCard;
