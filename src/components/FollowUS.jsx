import {
  followusencap,
  followustext,
  imgbox,
  imgitself,
} from "../styles/FollowUs";

const FollowUS = () => {
  return (
    <div style={followusencap}>
      <h1 style={followustext}>Follow us in instagram @propharm</h1>
      <div className="w-100 row row-cols-lg-6 row-cols-md-4 row-cols-sm-2 row-cols-1 justify-content-center gap-4 g-3">
        <div className="col" style={imgbox}>
          <img src="/p1.png" alt="" style={imgitself} />
        </div>
        <div className="col" style={imgbox}>
          <img src="/p2.png" alt="" style={imgitself} />
        </div>{" "}
        <div className="col" style={imgbox}>
          <img src="/p3.png" alt="" style={imgitself} />
        </div>{" "}
        <div className="col" style={imgbox}>
          <img src="/p4.png" alt="" style={imgitself} />
        </div>{" "}
        <div className="col" style={imgbox}>
          <img src="/p5.png" alt="" style={imgitself} />
        </div>{" "}
        <div className="col" style={imgbox}>
          <img src="/p6.png" alt="" style={imgitself} />
        </div>
      </div>
    </div>
  );
};

export default FollowUS;
