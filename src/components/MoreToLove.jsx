import {
  activeprice,
  boximg,
  colcontainer,
  fadedprice,
  imgbox,
  lovegrid,
  maintext,
  mtlencap,
  mtltext,
  strikenprice,
  textbox,
} from "../styles/MoreToLove";

const MoreToLove = () => {
  const moretoloveproducts = [
    {
      id: 1,
      img: "/Item1.svg",
      name: "Henry Blooms One Night Collagen",
      strikedprice: "$44.00",
      fadenedprice: "$39.00",
      activedprice: null,
      pricediscount: true,
    },
    {
      id: 2,
      img: "/Item2.svg",
      name: "Nair Precision Facial Hair Removal",
      strikedprice: "$5.50",
      fadenedprice: "$4.40",
      activedprice: null,
      pricediscount: true,
    },
    {
      id: 3,
      img: "/Item3.svg",
      name: "Musashi 100% Whey Vanilla",
      strikedprice: "$45.95",
      fadenedprice: "$40.15",
      activedprice: null,
      pricediscount: true,
    },
    {
      id: 4,
      img: "/Item4.svg",
      name: "Spring Leaf Kids Fish Oil 750mg",
      strikedprice: null,
      fadenedprice: null,
      activedprice: "$24.95",
      pricediscount: false,
    },
    {
      id: 5,
      img: "/Item5.svg",
      name: "Pain Away Forte + Arthritis Cream",
      strikedprice: "$22.95",
      fadenedprice: "$20.95",
      activedprice: null,
      pricediscount: true,
    },
    {
      id: 6,
      img: "/Item6.svg",
      name: "Nature’s Goodness Manuka Honey",
      strikedprice: null,
      fadenedprice: null,
      activedprice: "$36.95",
      pricediscount: false,
    },
    {
      id: 7,
      img: "/Item7.svg",
      name: "Nordic Naturals Arctic-D Cod Liver Oil",
      strikedprice: "$42.95",
      fadenedprice: "$37.45",
      activedprice: null,
      pricediscount: true,
    },
    {
      id: 8,
      img: "/Item8.svg",
      name: "More like this Martin & Pleasance",
      strikedprice: null,
      fadenedprice: null,
      activedprice: "$6.95",
      pricediscount: false,
    },
    {
      id: 9,
      img: "/Item9.svg",
      name: "Nuzest Clean Lean Protein Smooth",
      strikedprice: "$39.95",
      fadenedprice: "$30.15",
      activedprice: null,
      pricediscount: true,
    },
  ];
  return (
    <div style={mtlencap}>
      <h1 style={mtltext}>More to love</h1>
      <div
        style={lovegrid}
        className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1 justify-content-center gap-3 g-4"
      >
        {moretoloveproducts.map((product) => {
          return (
            <div className="col " style={colcontainer} key={product.id}>
              <div style={imgbox}>
                <img src={product.img} alt="" style={boximg} />
              </div>
              <div style={textbox}>
                <h1 style={maintext}>{product.name}</h1>
                {product.pricediscount ? (
                  <h1 style={fadedprice}>
                    <span style={strikenprice}>{product.strikedprice}</span>
                    {product.fadenedprice}
                  </h1>
                ) : (
                  <h1 style={activeprice}>{product.activedprice}</h1>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoreToLove;
