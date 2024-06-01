import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeLogin() {
  const [isSuccess, setIsSuccess] = useState(null);
  const [data, setData] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.log(`username: ${username}, password: ${password}`);
    fetch("https://khanif.neuversity.site/wp-json/jwt-auth/v1/token", {
      method: "POST",
      body: new URLSearchParams({
        username: username,
        password: password,
      }),
    })
      .then((resp) => {
        if (resp.ok) {
          setIsSuccess(true);
          console.log("berhasil");
        } else {
          setIsSuccess(false);
          console.log("gagal");
        }

        return resp.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
        // berhasil (alert login)
        if (data.token) {
          alert("Login Berhasil");
          // set token ke local storage
          localStorage.setItem("token", data.token);
          navigate("/Admin");
        } else {
          alert("Login Gagal");
        }
      })
      .catch((error) => console.error("Error:", error));

    setLoading(false);
  }

  useEffect(() => {}, []);
  return (
    <section>
      <div className="row d-flex h-100 mt-5 ">
        <div className="col-5 m-auto border py-3 px-3 rounded-3 ">
          <h1 className="text-center">Al Anwar 4 - Login</h1>
          {/* username */}
          <div>
            <label for="Username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="nama lengkap"
              value={username}
              onChange={(Event) => setUsername(Event.target.value)}
              required
            />
            <p>Admin Username</p>
          </div>
          {/* password */}
          <div>
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(Event) => setPassword(Event.target.value)}
            />
          </div>

          {/* button modal */}
          <button
            type="button"
            className="btn btn-primary mt-3"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}
