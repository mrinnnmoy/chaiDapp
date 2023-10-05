import React, { useState, useEffect } from 'react';

const Memos = ({ state }) => {
  const [memos, setMemos] = useState([]);
  const { contract } = state;

  useEffect(() => {
    const memmoMessage = async () => {
      const memos = await contract.getMemos();
      setMemos(memos);
    };
    contract && memmoMessage();
  }, [contract]);

  return (
    <div className='main-buy'>
      <p>Recent Messages:</p>
      {[...memos].reverse().map((memo) => {
        return (
          <div key={Math.random()}>
            <div className="msg-box">
              <div className='msg-top'>
                <span className='message'>{memo.message}</span>
              </div>
              <div className='msg-btm'>
                <span className='name'>Name: {memo.name}</span>
                <span className='timestamp'>Time: {new Date(memo.timestamp * 1000).toLocaleString()}</span>
                <span className='address'>From: {memo.from}</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
};

export default Memos;