import bgHero from "../../assets/9.jpg";
import imgProfil from "../../assets/IMG_2008 1.png";
export default function SectionHero() {
  return (
    <>
      <section className="section-hero mb-5 overflow-hidden position-relative">
        <div className="container h-100 text-white">
          <div className="row h-100 ">
            {/* text */}
            <div className="col-md-6 col-12 align-self-center">
              <p className="text-warning">Selamat datang di</p>
              <h1>Pondok Pesantren Al-Anwar IV Sarang</h1>
              <p>
                Didirikan oleh KH. Maimoen Zubair pada tahun 2018.dan diasuh
                oleh putra beliau KH. Taj Yasin Maimoen bersama dengan istri Ny.
                Hj. Nawal Nur Arafah yang di dalamnya termuat Lembaga SMK Al
                Anwar Sarang dan MTS Sains Al Anwar 4.
              </p>
              <div>
                <a href="/Pendaftaran" className="btn btn-success me-3">
                  Pendaftaran
                </a>
                <button type="button" class="btn btn-outline-warning">
                  Success
                </button>
              </div>
            </div>
            {/* img */}
            <div className="col-6 align-self-end">
              <img src={imgProfil} width="100%" />
            </div>
          </div>
        </div>

        {/* background */}
        <div className="position-absolute top-0 left-0 z-n1 bg-overlay-hero"></div>
        <img
          className="position-absolute top-0 left-0 z-n2 w-100 h-100"
          src={bgHero}
        />
      </section>
    </>
  );
}
