import { useEffect, useState } from "react";
import userService from "./services/UserService";
import { CanceledError } from "axios";
import "./styles/index.scss";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = userService.getAll();
    request
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);
  return (
    <div className="App">
      {posts.map((post, i) => {
        return (
          <div key={i}>
            <h1>{post.title}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default App;
