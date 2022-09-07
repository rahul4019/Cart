import React from "react";

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct,
  } = props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img}/>
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price}</div>
        <div style={{ color: "#777" }}>Qty: {qty}</div>
        <div className="cart-item-actions">
          {/* Buttons  */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
            alt="increase"
            className="action-icons"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
            alt="decrease"
            className="action-icons"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
            alt="delete"
            className="action-icons"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 100,
    borderRadius: 10,
    background: "#ccc",
  },
};

export default CartItem;
