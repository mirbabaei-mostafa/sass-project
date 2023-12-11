import { lazy, useEffect, useState } from 'react';
import userService from './services/UserService';
import { CanceledError } from 'axios';
import './styles/index.scss';
import { useTranslation } from 'react-i18next';

const Header = lazy(() => import('./component/Header'));

function App() {
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState(false);
  const [rows, setRows] = useState(false);
  const [posts, setPost] = useState([]);
  const [error, setError] = useState('');

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
      <div className="grid">
        <div className="gridHeader">
          <div className="gridHeaderTitle">{t('PostTitle')}</div>
          <div className="gridHeaderAction">{t('Action')}</div>
        </div>
        {isLoading && <div className="loading">{t('Loading')}</div>}
        {error && <div className="warning">{t('Loading')}</div>}
        {posts.map((post, i) => {
          // () => setRows(!rows);
          return (
            <div key={i}>
              <div className={rows ? 'gridRowsTitleEven' : 'gridRowsTitleOdd'}>
                {post.title}
              </div>
              <div
                className={rows ? 'gridRowsTitleEven' : 'gridRowsTitleOdd'}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
