import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
// import {useNavigate} from 'react-router-dom'
import CustomToast from './CustomToast';

const AddTransaction = () =>{

  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  // const navigateTo = useNavigate();

  const handleAddTrx = async (e) =>{
    e.preventDefault();
    await axios.post(
      'http://localhost:3004/api/v1/transaction/add', 
      { text, amount }, 
      {
        headers: { "Content-Type": "application/json" },
      }
    )
    .then((res) =>{
      toast.success(res.data.message);
      console.log(res);
      // navigateTo('/');
      setText('');
      setAmount(0);
    })
    .catch((err) =>{
      toast.error(err.response.data.message);
      console.log(err);
    })
  } 


  

  return (
    <>
        <CustomToast />
        <h3>Add New Transaction </h3>
        <form onSubmit={handleAddTrx}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input 
                  type="text" 
                  value={text} 
                  onChange={(e) =>setText(e.target.value)} 
                  placeholder='Enter text...'
                />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount &#160;&#160;&#160;&#160;(Negative - expense, Positive - income)</label>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder='Enter amount...' 
                />
            </div>
            <button className='btn' type='submit'>Add Transaction</button>
        </form>
    </>
  )
}

export default AddTransaction
