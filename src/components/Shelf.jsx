import { babyImg, herbsImg, vitaminsImg } from "../styles/StylesCard";
import ShelfCard from "./ShelfCard";

const Shelf = () => {
  return (
    <div
      className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3  g-4  pb-3 "
      style={{
        width: "86%",
        margin: "0 auto",
        maxWidth: "1240px",
      }}
    >
      <div className="col d-flex justify-content-center ">
        <ShelfCard
          listheading={"Vitamins"}
          l1={"Analgesics"}
          l2={"Antimalarial Drugs"}
          l3={"Antipyretics"}
          l4={"Antibiotics"}
          imgsrc={"/pill-jar.svg"}
          cardimgStyle={vitaminsImg}
        />
      </div>
      <div className="col d-flex justify-content-center">
        <ShelfCard
          listheading={"Baby Accessories"}
          l1={"Meal Replacements"}
          l2={"Protein powder"}
          l3={"Muscle building"}
          l4={"Low Calorie Snacks"}
          imgsrc={"/baby-acc.svg"}
          cardimgStyle={babyImg}
        />
      </div>
      <div className="col d-flex justify-content-center">
        <ShelfCard
          listheading={"Herbs"}
          l1={"Gluten Free"}
          l2={"Sun Care"}
          l3={"Sugar Free"}
          l4={"Super foods"}
          imgsrc={"/herbs.svg"}
          cardimgStyle={herbsImg}
        />
      </div>
    </div>
  );
};

export default Shelf;
