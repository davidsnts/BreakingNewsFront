import { useState, useEffect } from "react";

import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
/* import { news } from "../../Datas.js"; */
import { getAllPosts, getTopPost } from "../../services/postsServices";
import { HomeBody, HomeHeader } from "./HomeStyled";

export default function Home() {
  const [posts, setposts] = useState([]);
  const [topPost, setTopPost] = useState({});

  async function findPosts() {
    const postsResponse = await getAllPosts();
    setposts(postsResponse.data.results);

    const topPostResponse = await getTopPost();
    setTopPost(topPostResponse.data.post);
  }

  useEffect(() => {
    findPosts();
  }, []);

  return (
    <>
      <Navbar />
      <HomeHeader>
        <Card
            top={true}
            key={topPost.id}
            title={topPost.title}
            text={topPost.text}
            banner={topPost.banner}
            likes={topPost.likes}
            comments={topPost.comments}
          />
      </HomeHeader>
      <HomeBody>
        {posts.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </HomeBody>
    </>
  );
}
