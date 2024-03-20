import React from 'react';
import { useCart } from '../context/Cart';

const CartModal = ({ cartItems, onClose }) => {
  const { cart, setCart } = useCart();
  const cnt = Object.keys(cart).length;

  // Function to handle item removal from cart
  const handleRemoveFromCart = (key) => {
    const updatedCart = { ...cart };
    delete updatedCart[key];
    setCart(updatedCart);
  };

  // Function to calculate total bill
  const calculateTotalBill = () => {
    let total = 0;
    Object.values(cart).forEach((item) => {
      total += item.price;
    });
    return total;
  };

  return (
    <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Cart Items</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Sno.</th>
                  <th>Food Name</th>
                  <th>Quantity</th>
                  <th>Option</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cnt !== 0 ? (
                  Object.values(cartItems).map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.fdName}</td>
                      <td>{item.qnty}</td>
                      <td>{item.opt}</td>
                      <td>{item.price}</td>
                      <td><i className="bi bi-trash3-fill" onClick={() => handleRemoveFromCart(item.fdName)}></i></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">Cart is Empty</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="modal-footer" style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
            <p>Total Bill: ₹{calculateTotalBill()}</p>
            <button className="btn btn-primary" >Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
