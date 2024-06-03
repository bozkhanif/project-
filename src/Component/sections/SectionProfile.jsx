import imgProfile from "../../assets/3.jpg";
import imgSub from "../../assets/9.jpg";

export default function SectionProfile() {
  return (
    <section>
      <section className=" mb-5 overflow-hidden position-relative">
        <div className="container h-100 text-white text-center py-5">
          <h1>Profile</h1>
        </div>

        {/* background */}
        <div className="position-absolute top-0 left-0 z-n1 bg-overlay-hero"></div>
        <img
          className="position-absolute top-0 left-0 z-n2 w-100 h-100 object-fit-cover"
          src={imgSub}
        />
      </section>
      <div className="container">
        <img src={imgProfile} className="w-100 img-profile" />
        <div className="row py-5">
          <div className="col-8">
            <h1>
              Profil Pondok Pesantren Al-Anwar IV Sarang, Rembang, Jawa Tengah.
            </h1>
            <p>
              Object bullet pen comment line select effect content subtract.
              Bold italic hand ellipse scrolling reesizing vector horizontal
              duplicate. Slice scale boolean pixel bold hand reesizing outline.
              Union blur frame select link clip link vertical outline boolean.
              Clip library duplicate scale draft. Rectangle italic pencil text
              text. Edit duplicate group bold rotate scale scale editor flows
              flatten. Polygon create variant library group polygon flows
              variant bold. Create pixel share ellipse frame pencil comment fill
              clip. Figma horizontal boolean rotate image figma comment. Vector
              boolean style scrolling horizontal union style figma plugin.
              Inspect font underline clip figjam vector union. Comment share
              subtract style list union figjam pencil reesizing. Distribute
              overflow subtract asset duplicate follower. Font content image
              inspect style. Clip project undo reesizing pencil. Thumbnail star
              opacity background align team library outline. Link rotate font
              move main layout component link. Rotate link export blur star.
              Align component align follower project export shadow mask
              scrolling text. Pencil auto slice inspect layer. Shadow comment
              horizontal ellipse stroke. Underline variant invite outline
              outline ipsum. Ipsum auto device bold share bold undo component
              object opacity.
            </p>
          </div>
          <div className="col-4 py-3">
            <div className="container bg-light py-3">
              <p className="fw-bold text-primary">Visi</p>
              <p>
                Mewujudkan santri yang berakhlakul karimah, religius dan
                berwawasan intelektual.
              </p>
              <p className="fw-bold text-primary">Misi</p>
              <p>
                Menyiapkan generasi bangsa yang terampil, produktif, siap
                bersaing di dunia usaha dan industri.
              </p>
              <hr />
              <p>Membentuk karakter yang santun dan bermanfaat.</p>
              <hr />
              <p>
                Menanamkan keilmuan yang berlandaskan Al-Quran dan kutubussalaf.
              </p>
            </div>
            <div className="py-3">
              <button className="btn btn-primary w-100">Download Brosur</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
