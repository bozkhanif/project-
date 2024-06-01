import bgFooter from "../assets/9.jpg";
import Ellipse3 from "../assets/Ellipse3.png";
import Ellipse2 from "../assets/Ellipse2.png";
import play from "../assets/play.png";
export default function Footer() {
  return (
    <section className=" overflow-hidden position-relative mt-auto">
      <div className="container h-100 text-white py-5">
        <div className="row align-items-center pt-5 text-left mb-5 ">
          <div className="col">
            <div className="text-white">
              <h4 className="fw-bold mb-3">
                Mewujudkan santri yang berakhlakul karimah, religius dan
                berwawasan intelektual.
              </h4>
            </div>
          </div>
          <div className="col-4 position-relative d-flex justify-content-center align-items-center">
            <img
              className="position-absolute"
              width={178}
              height={178}
              src={Ellipse3}
              alt="Ellipse3"
            />
            <img
              className="position-absolute"
              width={137}
              height={137}
              src={Ellipse2}
              alt="Ellipse2"
            />
            <img
              className="position-absolute"
              width={50}
              height={50}
              src={play}
              alt="play"
            />
          </div>
        </div>
      </div>

      {/* background */}
      <div className="position-absolute top-0 left-0 z-n1 bg-overlay-hero"></div>
      <img
        className="position-absolute top-0 left-0 z-n2 w-100 h-100"
        src={bgFooter}
      />

      <div className=" bg-primary">
        <p className="text-white text-center py-3 mb-0">
          Copyrigh © 2024 Al-Anwar Media
        </p>
      </div>
    </section>
  );
}
