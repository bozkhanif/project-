import img1 from "../../assets/IMG_2008 1.png";
import img2 from "../../assets/7fe59f4fd154299abafb8eb51e332cc2.jpeg";
import img3 from "../../assets/7fe59f4fd154299abafb8eb51e332cc2.jpeg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SectionKegiatan() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://khanif.neuversity.site/wp-json/wp/v2/posts?_embed"
        );
        const data = await response.json();
        console.log(data, "post");
        setPosts(data);
      } catch (error) {
      } finally {
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);
  function getMaxKarakter(str, maxKarakter = 20) {
    if (str.length <= maxKarakter) {
      return str;
    } else {
      return str.substring(0, maxKarakter) + "...";
    }
  }
  return (
    <section>
      <div className="container text-center">
        <h3>Kegiatan Pondok</h3>
        <div className="row py-4">
          {posts.map((post) => (
            <div className="col-4">
              <div className="card mb-4">
                <img
                  src={
                    post._embedded["wp:featuredmedia"]
                      ? post._embedded["wp:featuredmedia"][0].source_url
                      : "https://picsum.photos/300/300"
                  }
                  className="card-img-top card-blog-img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title.rendered}</h5>
                  <div
                    className="card-text"
                    dangerouslySetInnerHTML={{
                      __html: getMaxKarakter(post.excerpt.rendered, 100),
                    }}
                  ></div>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">{post.date}</small>
                </div>
                <Link to={`/posts/${post.id}`} className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
