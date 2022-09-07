import React from "react";

const Navbar = (props) => {
  
    return (
      <div style={styles.nav}>
        <div style={styles.cartIconContainer}>
          <img
            style={styles.cartIcon}
            src="https://cdn-icons-png.flaticon.com/512/3737/3737372.png"
            alt="cart-icon"
          />
          <span style={styles.cartCount}>{props.count}</span>
        </div>
      </div>
    );
    
}

const styles = {
  cartIcon: {
    height: 35,
  },
  nav: {
    height: 70,
    padding: 5,
    background: "skyblue",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartIconContainer: {
    position: 'relative'
  },
  cartCount: {
    background: 'yellow',
    borderRadius: '50%',
    padding: '4px 8px',
  }
};

export default Navbar;
