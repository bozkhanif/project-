import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SectionPosts1() {
  const [Posts, setPosts] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch(
      `https://web.abdulhaxor.my.id/wp-json/wp/v2/posts/${params.id}?_embed`
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
          <div style={{ height: "20vh", width: "100vw" }}>
            <img
              src="https://picsum.photos/1080/1080"
              className="w-100 h-100 object-fit-cover"
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
        <>Data Tidak ditemukan </>
      )}
    </>
  );
}
