export default function HomeLogin() {
  return (
    <section>
      <div className="row d-flex h-100 mt-5 ">
        <div className="col-5 m-auto border py-3 px-3 rounded-3 ">
          <h1 className="text-center">Al Anwar 4 - Login</h1>
          {/* username */}
          <div>
            <label for="Username" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control"
              id="nama lengkap"
              required
            />
            <p>Admin Username</p>
          </div>
          {/* password */}
          <div>
            <label for="password" class="form-label">
              Password
            </label>
            <input type="text" class="form-control" id="password" />
          </div>

          {/* button modal */}
          <button
            type="button"
            className="btn btn-primary mt-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Submit
          </button>
          {/* alert */}
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Woro-Woro
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                  Username dan password yang dimasukkan salah
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
