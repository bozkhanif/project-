export default function Admin() {
  return (
    <section className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <h1 className="text-white">Admin</h1>

          <div className="collapse navbar-collapse">
            <button className="btn btn-danger ms-auto">Logout</button>
          </div>
        </div>
      </nav>
      {/* content */}
      <form>
        <div className="row d-flex h-100 mt-5">
          <div className="col-5 m-auto border py-3 px-3 rounded-3">
            <h3>Membuat Postingan Blog</h3>
            {/* chose file */}
            <div className="mb-3 mt-3">
              <label className="form-label">Featured media</label>
              <input
                type="file"
                className="form-control"
                aria-label="file example"
                required=""
              />
              <div className="invalid-feedback">
                Example invalid form file feedback
              </div>
            </div>
            {/* judul blog */}
            <div>
              <label for="Username" class="form-label">
                Judul
              </label>
              <input
                type="text"
                class="form-control"
                id="nama lengkap"
                placeholder="Judul Blog.."
                required
              />
            </div>
            {/* Conten */}
            <div className="mt-3">
              <label htmlFor="validationTextarea" className="form-label">
                Conten
              </label>
              <textarea
                className="form-control"
                id="validationTextarea"
                placeholder="Conten Blog.."
                required=""
                defaultValue={""}
              />
              <div className="invalid-feedback">
                Please enter a message in the Conten form
              </div>
            </div>
            {/* button submit */}
            <button className="btn btn-primary mt-3">Submit</button>
          </div>
        </div>
      </form>
      {/* footer */}
      <div className=" bg-primary mt-auto">
        <div className="container">
          <p className="text-white text-center mb-0 py-2">Create by @khanif</p>
        </div>
      </div>
    </section>
  );
}
