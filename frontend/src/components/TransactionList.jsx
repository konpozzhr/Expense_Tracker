import axios from 'axios'
import React, { useEffect, useState } from 'react'

const TransactionList = () =>{

  const [transaction, setTransaction] = useState([]);

  const Transaction = async () =>{
    const response = await axios.get(
      'http://localhost:3004/api/v1/transaction/viewTrx',
      {},
      {
        headers: { "Content-Type": "application/json" },
      }
    )

    setTransaction(response.data.object);
  }


  useEffect(() =>{
    const timer = setTimeout(() => {
      Transaction();      // Call the function after a delay of 30 seconds
    }, 3000);             // 30 seconds delay

    return () => clearTimeout(timer);
  }, []);

  console.log('transaction ', transaction);

  // const hello = ()=>{
  //   alert('hello'); 
  // }

  return (
    <>
        <h3>History</h3>
        <div className=''>
          <ul className="list">
              {/* <li className="minus">
                  Cash <span>400</span><button className="delete-btn">x</button>
              </li>
              <li className="">
                  Cash <span>400</span><button className="delete-btn">x</button>
              </li> */}
              {
                transaction.map((item, index) =>{
                  const date = new Date(item.createAt);
                  const formattedDate = date.toLocaleString();

                  return (
                    <li key={index} className={item.amount > 0 ? 'plus' : 'minus'} >
                      {item.text} <span>{item.amount} $</span><span>{formattedDate}</span><button className="delete-btn" >X</button>
                      
                    </li>
                  )
                })
              }

          </ul>
        </div>
    </>
  )
}

export default TransactionList
