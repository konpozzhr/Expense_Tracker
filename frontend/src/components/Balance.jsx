import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Balance = () =>{

  const [balance, setBalance] = useState([]);
  const [totalBal, setTotalBal] = useState();

  const getABal = async () =>{
    const response = await axios.get(
      'http://localhost:3004/api/v1/transaction/viewTrx',
      {},
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    
    const amounts = response.data.object.map(item => item.amount);

    console.log(response);
    
    console.log('Available Balance is ', response.data.object.amount)  
    response.data.object.forEach((item, index) => {
      console.log(`Amount ${index + 1}: ${item.amount}`);
      
    });

    setBalance(amounts);

    let total = 0;
    amounts.forEach(sum => {
      total += sum;
    })

    setTotalBal(total.toFixed(2));
  }
  
  useEffect(() => {
    const timer = setTimeout(() => {
      getABal();      // Call the function after a delay of 30 seconds
    }, 3000);         // 30 seconds delay

    return () => clearTimeout(timer);
  }, []);

  console.log('result of array balance : ', balance);

  



  return (
    <div>
      <h4>Your Balance</h4>
      <h1>$ {totalBal}</h1>
      
    </div>
  )
}

export default Balance
