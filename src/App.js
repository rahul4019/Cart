import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  onSnapshot,
  setDoc,
  doc,
  addDoc,
} from "firebase/firestore";
import { app } from "./index";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true,
    };
    this.db = getFirestore(app);
  }

  async componentDidMount() {
    /* const db = getFirestore(app);
    const q = query(collection(db, "products"));

    const querySnapshot = await getDocs(q);

    const products = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      data["id"] = doc.id;
      return data;
    });

    this.setState({
      products,
      loading: false,
    }); */

    // const db = getFirestore(app);
    const q = query(collection(this.db, "products"));

    const querySnapshot = await getDocs(q);

    onSnapshot(q, (querySnapshot) => {
      const products = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });

      this.setState({
        products,
        loading: false,
      });
    });
  }

  handleIncreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState({
      products,
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;

    this.setState({
      products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  };

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return "";
    });

    return cartTotal;
  };

  // add product
  addProduct = async () => {
    await addDoc(collection(this.db, "products"), {
      title: "Wasching machine",
      img: " ",
      price: 23487,
      qty: 2,
    });
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct}>Add a product</button>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1> Loading Products ...</h1>}
        <div style={{ fontSize: 20, padding: 10, fontWeight: "bold" }}>
          TOTAL: ₹{this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
