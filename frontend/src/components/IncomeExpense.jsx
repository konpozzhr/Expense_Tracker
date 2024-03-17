import axios from 'axios';
import React, { useEffect, useState } from 'react'

const IncomeExpense = () =>{

  
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();

  const getAllBalance = async () =>{
    const response = await axios.get(
      'http://localhost:3004/api/v1/transaction/viewTrx',
      {}, 
      {
        headers: { "Content-Type": "application/json" },
      }
    );

    const amounts = response.data.object.map(item => item.amount);
    console.log('Amount from Income and Expense ', amounts);

    const sumPositive = amounts
      .filter(amt => amt > 0)
      .reduce((sum, amt) => sum + amt, 0);
    setIncome(sumPositive.toFixed(2));

    const sumNegative = amounts
      .filter(amt => amt < 0)
      .reduce((sum, amt) => sum + amt, 0);
    setExpense(Math.abs(sumNegative).toFixed(2));

  }

  useEffect(() => {
    const timer = setTimeout(() => {
      getAllBalance();      // Call the function after a delay of 30 seconds
    }, 3000);         // 30 seconds delay

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${expense}</p>
            </div>
        </div>
    </>
  )
}

export default IncomeExpense
