import './directory-item.styles.jsx';
import {
  BackgroundImage,
  BodyContainer,
  DirectoryContainer,
} from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <DirectoryContainer key={id}>
      <BackgroundImage imageUrl={imageUrl} />
      <BodyContainer>
        <h2>{title}</h2>
        <p>ShopNow</p>
      </BodyContainer>
    </DirectoryContainer>
  );
};

export default DirectoryItem;
