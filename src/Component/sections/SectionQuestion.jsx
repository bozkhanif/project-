import { Link } from "react-router-dom";
import bgHero from "../../assets/9.jpg";
import imgProfil from "../../assets/IMG_2008 1.png";

export default function SectionQuestion() {
  return (
    <section className="mb-5 overflow-hidden position-relative py-5">
      <div className="container h-100 text-white text-center py-5">
        <p className="text-warning">K. H. Maimoen Zubair</p>
        <h3>
          “Ojo mikir engko dadi opo. Sing penting saiki sinau sing sergep.”
        </h3>
        <Link to="/Pendaftaran" className="btn btn-warning mt-2">
          Ayo Mondok Sekarang
        </Link>
      </div>

      {/* background */}
      <div className="position-absolute top-0 left-0 z-n1 bg-overlay-hero"></div>
      <img
        className="position-absolute top-0 left-0 z-n2 w-100 h-100 object-fit-cover"
        src={bgHero}
      />
    </section>
  );
}
