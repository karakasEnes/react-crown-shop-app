import './directory-item.styles.jsx';
import {
  BackgroundImage,
  BodyContainer,
  DirectoryContainer,
} from './directory-item.styles.jsx';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl, route } = category;
  const navigate = useNavigate();

  const navigateHandler = () => navigate(route);
  return (
    <DirectoryContainer onClick={navigateHandler} key={id}>
      <BackgroundImage imageUrl={imageUrl} />
      <BodyContainer>
        <h2>{title}</h2>
        <p>ShopNow</p>
      </BodyContainer>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
