import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Admin() {
  const navigate = useNavigate();
  const [judul, setJudul] = useState("");
  const [konten, setKonten] = useState("");
  const [loading, setLoading] = useState(false);
  // state image
  const [image, setImage] = useState(null);
  async function uploadImage() {
    const formData = new FormData();
    formData.append("file", image);

    const response = await fetch(
      "https://khanif.neuversity.site/wp-json/wp/v2/media",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      }
    );

    const data = await response.json();
    console.log(data);
    if (!data.id) throw new Error("Gagal Upload");
    return data;
  }

  async function CreatePost() {
    setLoading(true);
    const featuredmedia = await uploadImage();
    fetch("https://khanif.neuversity.site/wp-json/wp/v2/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        title: judul,
        content: konten,
        status: "publish",
        featured_media: featuredmedia.id,
      }),
    })
      .then(async (Response) => {
        const data = await Response.json();
        console.log(data, "post");
        if (Response.ok) {
          Swal.fire({
            title: "Post Berhasil",
            text: "Post Berhasil Dibuat",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Post Gagal",
            text: "Post Gagal Dibuat",
            icon: "error",
          });
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }
  function handleSubmit(Event) {
    Event.preventDefault();
    CreatePost();
  }
  function handlelogout() {
    Swal.fire({
      title: "Apakah anda yakin ingin logout?",
      icon: "question",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonColor: "green",
      confirmButtonText: "ya",
      cancelButtonText: "tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        // remove token
        localStorage.removeItem("token");

        //menampilkan pesan logout
        Swal.fire({
          title: "Logout Berhasil",
          text: "Anda telah logout",
          icon: "success",
        });
        // redirect ke halaman login
        navigate("/admin/Login");
      }
    });
  }
  function checkAuth() {
    // auntetikasi token
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin/Login");
    }
  }
  // check auntetikasi ketika pertama kali halaman di load, useEffect mounting
  useEffect(() => {
    checkAuth();
  }, []);
  return (
    <section
      className="d-flex flex-column w-100"
      style={{ minHeight: "100vh" }}
    >
      {/* navbar */}
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container">
          <h1 className="text-white">Admin</h1>

          <div className="collapse navbar-collapse">
            <button className="btn btn-danger ms-auto" onClick={handlelogout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
      {/* content */}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="container row d-flex h-100 mt-5">
          <div className="col-5 m-auto border py-3 px-3 rounded-3">
            <h3>Membuat Postingan Blog</h3>
            {/* chose file */}
            <div className="mb-3 mt-3">
              <label className="form-label">Featured media</label>
              <input
                type="file"
                onChange={(Event) => setImage(Event.target.files[0])}
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
              <label htmlFor="Username" className="form-label">
                Judul
              </label>
              <input
                type="text"
                onInput={(Event) => setJudul(Event.target.value)} //{setJudul}
                className="form-control"
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
                onInput={(Event) => setKonten(Event.target.value)} //{setKonten}
              />
              <div className="invalid-feedback">
                Please enter a message in the Conten form
              </div>
            </div>
            {/* button submit */}
            <button className="btn btn-primary mt-3">
              {loading ? (
                <div>
                  <div>
                    <div class="spinner-border" role="status">
                      <span class="sr-only"></span>
                    </div>
                    loading
                  </div>
                </div>
              ) : (
                "Submit"
              )}
            </button>
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
