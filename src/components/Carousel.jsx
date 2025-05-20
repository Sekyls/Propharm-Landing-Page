const CarouselSlide = () => {
  return (
    <div id="carouselIndicators" className="carousel slide d-none d-md-flex">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <img src="/label-green.svg" alt="" className=" d-block label-green" />
        <img src="/asset-1.svg" alt="" className=" d-block asset-1" />
        <img src="/asset-2.svg" alt="" className=" d-block asset-2" />
        <div className="Pyridoxine">Pyridoxine Vitamin B6</div>
        <div className="Vitamins">Vitamins & Supplements</div>
        <button className="Buy btn btn-light">Buy it now </button>
        <div className="carousel-item active">
          <img
            src="/rs-slides.svg"
            className="d-block img-fluid"
            alt="..."
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="..."
            className="d-block w-100"
            alt="..."
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="..."
            className="d-block w-100"
            alt="..."
            style={{ maxWidth: "100%" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselSlide;
