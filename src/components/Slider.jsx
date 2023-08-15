import Image1 from "../Imgs/img1.png";
import Image2 from "../Imgs/img2.png";
import Image3 from "../Imgs/img3.jpg";
import "./Slider.css";
function Slider() {
  return (
    <>
      <div id="carouselExample" className="carousel slide bg-dark text-center">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="slid-img" src={Image1} alt="..."></img>
          </div>
          <div className="carousel-item">
            <img className="slid-img" src={Image2} alt="..."></img>
          </div>
          <div className="carousel-item">
            <img className="slid-img" src={Image3} alt="..."></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Slider;
// made by ZYAD AHMED AFIFI
