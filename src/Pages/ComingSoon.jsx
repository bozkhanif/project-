import { Link } from "react-router-dom";
import img from "../assets/artwork.png";
export default function ComingSoon() {
  return (
    <section className="container">
      <div className="row align-items-center py-5">
        <div className="col-md-6 order-md-1 order-2">
          <h1 className="fw-bold">Website ini sedang dalam pembangunan</h1>
          <p>
            Mohon ditunggu ya, website saya masing dalam proses pembangunan.
            Kamu juga pengen buat website seperti ini?
          </p>
          <Link
            to="https://wa.me/6285875573466"
            className="btn btn-danger me-3"
            target="_blank"
          >
            Hubungi saya
          </Link>
          <Link to="/" className="btn btn-primary">
            Kembali
          </Link>
        </div>
        <div className="col-md-6 order-md-2 order-1">
          <img className="w-100" src={img} alt="" />
        </div>
      </div>
    </section>
  );
}
