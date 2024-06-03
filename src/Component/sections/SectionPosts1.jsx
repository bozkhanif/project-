import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SectionPosts1() {
  const [Posts, setPosts] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(
      `https://khanif.neuversity.site/wp-json/wp/v2/posts/${params.id}?_embed`
    )
      .then((Response) => Response.json())
      .then((data) => {
        if (data.id) setPosts(data);
        console.log(data);
      });
  });
  return (
    <>
      {Posts ? (
        <>
          <div className="container">
            <img
              src={
                Posts._embedded["wp:featuredmedia"]
                  ? Posts._embedded["wp:featuredmedia"][0].source_url
                  : "https://picsum.photos/300/300"
              }
              className="w-100 img-profile-posts"
            />
          </div>
          <div className="container mt-5">
            <h1>{Posts.title.rendered}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: Posts.content.rendered }}
            ></div>
          </div>
        </>
      ) : (
        <>Data Tidak ditemukan.......!!!!! </>
      )}
    </>
  );
}
