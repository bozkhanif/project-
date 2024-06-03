import imgProgram from "../../assets/1c87a917f757a3347fd4deb6304ac351.png";
import CardProgram from "../CardProgram";
export default function SectionDummy() {
  return (
    <section className="section-dummy">
      <div className="mt-5 bg bg-light">
        <div className="container py-5">
          <div className="row justify-content-center">
            {/* text gambar */}
            <div className="col-md-4 col-12">
              <div className="d-flex flex-column h-100">
                <h2 className="fw-bold">
                  <span className="text-primary">Program Unggulan</span> Pondok
                  Pesantren Al-Anwar IV Sarang
                </h2>
                <p>
                  Pondok Pesantren Al Anwar 4, sebagai lembaga pendidikan Islam
                  ternama di Indonesia, senantiasa berkomitmen untuk mencetak
                  generasi muda Islami yang berakhlak mulia dan berilmu
                  pengetahuan luas. Untuk mencapai tujuan tersebut, pesantren
                  ini menyelenggarakan berbagai program unggulan yang dirancang
                  khusus untuk memenuhi kebutuhan santri di era modern.
                </p>
                <img
                  className="img-program w-100 object-fit-cover mb-3"
                  src={imgProgram}
                  width="100%"
                />
              </div>
            </div>
            {/* text gambar end */}

            {/* card 1 */}
            <div className="col-md-4 col-12 mt-4 mt-md-0">
              <div className="d-flex flex-column h-100">
                <CardProgram
                  judul={
                    <>
                      <h4>Tahfidz Al-Qur'an</h4>
                    </>
                  }
                  Konten={
                    <>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Optio aperiam vero debitis illo aliquid, tempora explicabo
                      placeat quia veniam nam?
                    </>
                  }
                />
                <CardProgram
                  judul={
                    <>
                      <h4>Metode Al Qur'an Yanbu'a</h4>
                    </>
                  }
                  Konten={
                    <>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Optio aperiam vero debitis illo aliquid, tempora explicabo
                      placeat quia veniam nam?
                    </>
                  }
                />
                <CardProgram
                  judul={
                    <>
                      <h3>Metode Nahwu Al Asas</h3>
                    </>
                  }
                  Konten={
                    <>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Optio aperiam vero debitis illo aliquid, tempora explicabo
                      placeat quia veniam nam?
                    </>
                  }
                />
              </div>
            </div>
            {/* card 1 end */}

            {/* card 2 */}
            <div className="col-md-4 col-12 mt-4 mt-md-0">
              <div className="d-flex flex-column h-100">
                <CardProgram
                  judul={
                    <>
                      <h3>Kitab Bandongan</h3>
                    </>
                  }
                  Konten={
                    <>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Optio aperiam vero debitis illo aliquid, tempora explicabo
                      placeat quia veniam nam?
                    </>
                  }
                />
                <CardProgram
                  judul={
                    <>
                      <h3>Sorogan Kitab</h3>
                    </>
                  }
                  Konten={
                    <>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Optio aperiam vero debitis illo aliquid, tempora explicabo
                      placeat quia veniam nam?
                    </>
                  }
                />
                <CardProgram
                  judul={
                    <>
                      <h3>Batsul Masail</h3>
                    </>
                  }
                  Konten={
                    <>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Optio aperiam vero debitis illo aliquid, tempora explicabo
                      placeat quia veniam nam?
                    </>
                  }
                />
              </div>
            </div>
            {/* card 2 end */}
          </div>
        </div>
      </div>
    </section>
  );
}
