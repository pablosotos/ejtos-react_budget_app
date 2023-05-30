import React, { useContext } from 'react';
import { HiMinusCircle } from 'react-icons/hi';
import { IoIosAddCircle } from 'react-icons/io';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const decreaseAllocation = (name) => {
    const expense = {
        name: name,
        cost: 10,
      };
  
      dispatch({
        type: 'RED_EXPENSE',
        payload: expense,
      });
  };

  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };

    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense,
    });
  };

  return (
    <tr>
      <td>{props.name}</td>
      <td>£{props.cost}</td>
      <td>
          <IoIosAddCircle 
            size='2em'
            style={{ color: 'green' }}
            onClick={(event) => increaseAllocation(props.name)}
          />
      </td>
      <td>
          <HiMinusCircle 
            size='2em'
            style={{ color: 'red' }}
            onClick={(event) => decreaseAllocation(props.name)}
          />
      </td>
    </tr>
  );
};

export default ExpenseItem;
