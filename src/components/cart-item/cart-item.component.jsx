const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;

  return (
    <div className=''>
      <h3>{name}</h3>
      <div>{quantity}</div>
    </div>
  );
};

export default CartItem;
