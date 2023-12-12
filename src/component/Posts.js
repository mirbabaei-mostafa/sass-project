import { useTranslation } from "react-i18next";

function Posts({ posts }) {
  const { t } = useTranslation();

  return (
    <div className="grid">
      <div className="gridHeader">
        <div className="gridHeaderTitle">{t("PostTitle")}</div>
        <div className="gridHeaderAction">{t("Action")}</div>
      </div>
      {posts.map((post, i) => {
        return (
          <div key={i} className={i % 2 ? "gridRowsEven" : "gridRowsOdd"}>
            <div className="gridRowsTitle">{post.title}</div>
            <div className="gridRowsAction">
              <button className="submitButton">{t("View")}</button>{" "}
              <button className="submitButton">{t("Edit")}</button>{" "}
              <button className="submitButton">{t("Delete")}</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
