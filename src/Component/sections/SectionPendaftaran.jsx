import { useState } from "react";
import imgDaftar from "../../assets/9.jpg";
export default function SectionPendaftaran() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleSubmit(Event) {
    Event.preventDefault();
    window.open(
      "https://wa.me/6285875573466?text=" +
        encodeURIComponent(
          `
Halo saya ingin mendaftar ke pondok pesantren Al-Anwar IV Sarang
*berikut informasi pendaftaran*
-Nama: ${name}
-Email: ${email}

> blockquote
    `,
          "_blank"
        )
    );
  }
  return (
    <section>
      <section className=" mb-5 overflow-hidden position-relative">
        <div className="container h-100 text-white text-center py-5">
          <h1>Pendaftaran</h1>
        </div>

        {/* background */}
        <div className="position-absolute top-0 left-0 z-n1 bg-overlay-hero"></div>
        <img
          className="position-absolute top-0 left-0 z-n2 w-100 h-100 object-fit-cover"
          src={imgDaftar}
        />
      </section>

      <section className=" section-pendaftaran">
        <div className="row justify-content-center">
          <div className="col-8">
            <div className="bg-secondary-subtle rounded-2 mb-3 mt-3">
              <div className="py-5 px-5"></div>
            </div>
            <div className="">
              <form onSubmit={handleSubmit}>
                <div className=" row justify-content-between">
                  {/* Nama Lengkap */}
                  <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="nama lengkap" className="form-label">
                      Nama Lengkap <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama lengkap"
                      placeholder="Nama Sesuai KK"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  {/* Nama Panggilan */}
                  {/* <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="nama panggilan" className="form-label">
                      Nama Panggilan <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nama panggilan"
                      placeholder="Masukkan Nama Panggilan"
                      required
                    />
                  </div> */}
                  {/* NIK/Nomor KTP */}
                  {/* <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="NIK/nomor KTP" className="form-label">
                      NIK/Nomor KTP <span className="text-danger">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="NIK"
                      placeholder="Nomor Induk Kependudukan"
                      required
                    />
                  </div> */}
                  {/* Nomor Telepon */}
                  {/* <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="nomor telepon" className="form-label">
                      Nomor Telepon <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nomor telepon"
                      placeholder="08XX-XXXX-XXXX"
                      required
                    />
                  </div> */}
                  {/* Email */}
                  <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="Email" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="example@gmail.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  {/* Tempat Lahir */}
                  {/* <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="Tempat Lahir" className="form-label">
                      Tempat Lahir <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Tempat Lahir"
                      placeholder="Kota/Kabupaten"
                      required
                    />
                  </div> */}
                  {/* Tanggal Lahir */}.{/* Jenis Kelamin */}
                  {/* <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="" className="form-label">
                      Jenis Kelamin <span className="text-danger">*</span>
                    </label>
                    <div className="input-group">
                      <div className="form-control gap-3 d-flex">
                        <input
                          type="radio"
                          name="kelamin"
                          id="Laki-laki"
                          value="Laki-laki"
                          className="form-check-input"
                          required
                        />
                        <label htmlFor="Laki-laki">Laki-laki</label>
                      </div>
                      <div className="form-control gap-3 d-flex">
                        <input
                          type="radio"
                          name="kelamin"
                          id="Perempuan"
                          value="Perempuan"
                          className="form-check-input"
                          required
                        />
                        <label htmlFor="Perempuan">Perempuan</label>
                      </div>
                    </div>
                  </div> */}
                  {/* Pekerjaan */}
                  {/* <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="pekerjaan" className="form-label">
                      Pekerjaan <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="pekerjaan"
                      placeholder="Programmer, Dokter, dll"
                      required
                    />
                  </div> */}
                  {/* Alamat Lengkap */}
                  {/* <div className="mb-3">
                    <label htmlFor="alamat lengkap" className="form-label">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="alamat"
                      placeholder="Nama Jalan, Gang, No. Rumah, RT dan RW"
                      required
                    />
                  </div> */}
                  {/* Provinsi */}
                  {/* <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="provinsi" className="form-label">
                      Provinsi <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="provinsi"
                      placeholder="Provinsi"
                      required
                    />
                  </div> */}
                  {/* Kabupaten */}
                  {/* <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="kabupaten" className="form-label">
                      Kabupaten <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="kabupaten"
                      placeholder="Kabupaten"
                      required
                    />
                  </div> */}
                  {/* Kecamatan */}
                  {/* <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="kecamatan" className="form-label">
                      Kecamatan <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="kecamatan"
                      placeholder="Kecamatan"
                      required
                    />
                  </div> */}
                  {/* Desa */}
                  {/* <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="desa" className="form-label">
                      Desa <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="desa"
                      placeholder="Desa"
                      required
                    />
                  </div> */}
                  {/* Pendidikan terakhir */}
                  {/* <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="pendidikan" className="form-label">
                      Pendidikan Terakhir <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="pendidikan"
                      placeholder="Pilih Pendidikan"
                      required
                    />
                  </div> */}
                  {/* Status Pernikahan */}
                  {/* <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="status" className="form-label">
                      Status Pernikahan <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="satus pernikahan"
                      placeholder="Pilih Status"
                      required
                    />
                  </div> */}
                  {/* Kepengurusan NU */}
                  {/* <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="kepengurusan" className="form-label">
                      Kepengurusan di NU? <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="kepengurusan"
                      placeholder="Banom, Lembaga, dll"
                      required
                    />
                  </div> */}
                  {/* Jabatan Kepengurusan */}
                  {/* <div className="col-md-6 col-12 mb-3">
                    <label htmlFor="jabatan" className="form-label">
                      Jabatan Kepengurusan{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="jabatan pernikahan"
                      placeholder="Ketua, Sekretaris, dll"
                      required
                    />
                  </div> */}
                  <div>
                    <button className="btn btn-primary mb-3">Kirim</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
