import { lazy, useEffect, useState } from "react";
import "./styles/index.scss";
import { useTranslation } from "react-i18next";
import userService from "./services/UserService";
import { CanceledError } from "axios";

const Header = lazy(() => import("./component/Header"));
const Posts = lazy(() => import("./component/Posts"));
const NewPost = lazy(() => import("./component/NewPost"));

function App() {
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);
  const [error, setError] = useState("");
  const [addNewPost, setPostStatus] = useState(false);

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
    <div className="container">
      <Header />
      {isLoading && <div className="loading">{t("Loading")}</div>}
      {error && <div className="warning">{t("Loading")}</div>}
      {addNewPost && <NewPost />}
      <Posts posts={posts} />
    </div>
  );
}

export default App;
