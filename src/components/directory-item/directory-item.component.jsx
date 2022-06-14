import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;
  return (
    <div key={id} className='directory-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='directory-body-container'>
        <h2>{title}</h2>
        <p>ShopNow</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
