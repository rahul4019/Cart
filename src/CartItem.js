import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: "Mobile Phone",
      qty: 1,
      img: "",
    };

    // this.increaseQuantity = this.increaseQuantity.bind(this)
  }

  increaseQuantity = () => {
    // this.state.qty += 1;
    // console.log(this.state);

    // set state form 1 (when previous state is not required use this method)
    /* this.setState({
      qty: this.state.qty + 1
    }); */

    // set state form 2 (when previous state is required use this method)
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1
      }
    });
  };

  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
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
              onClick={this.increaseQuantity}
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png"
              alt="decrease"
              className="action-icons"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
              alt="delete"
              className="action-icons"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 100,
    borderRadius: 10,
    background: "#ccc",
  },
};

export default CartItem;
