import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="header">
      <div className="logo">{t("MyBlog")}</div>
      <div className="navbar">
        <button className="submitButton">{t("NewPost")}</button>
      </div>
    </div>
  );
};

export default Header;
