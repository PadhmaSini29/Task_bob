import Post from "../post/Post";
import "./posts.scss";

import descImage from "../../assets/pexels-manuel-barros-2403016.jpg";


const Posts = () => {
  const posts = [
    {
      id: 1,
      name: "Naveena",
      userId: 1,
      profilePicture:"https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Dream big, work hard, stay focused, and surround yourself with good people",
      img: descImage
      
    },

    {
      id: 3,
      name: "Swetha",
      userId: 3,
      profilePicture:"https://images.pexels.com/photos/802457/pexels-photo-802457.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "The only way to do great work is to love what you do",
     
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;
