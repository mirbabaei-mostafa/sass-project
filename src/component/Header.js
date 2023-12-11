import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="header">
      <div className="logo">{t('MyBlog')}</div>
      <div className="navbar">Navbar</div>
    </div>
  );
};

export default Header;
