import React from 'react';
import { ethers } from 'ethers';

const Buy = ({ state }) => {

  const buyChai = async (event) => {
    event.preventDefault();

    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;

    const amount = { value: ethers.utils.parseEther("0.5") };
    const transaction = await contract.buyChai(name, message, amount);
    await transaction.wait();

    window.alert("Transaction successfull");
  }

  return (
    <div className='main-buy'>
      <p>Buy a Chai for 0.5 MATIC</p>

      <form onSubmit={buyChai}>
        <div className="inputbox">
          <span>Name:</span>
          <input type="text" placeholder='Enter your name.' required="required" id='name' />
        </div>
        <div className="inputbox">
          <span>Message:</span>
          <input type="text" placeholder='Enter your message.' required="required" id='message' />
        </div>
        <div className="inputbox">
          <button className='buybtn' type="submit" disabled={!state.contract}>BUY</button>
        </div>
      </form>

    </div>
  )
};

export default Buy;