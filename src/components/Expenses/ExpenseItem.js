import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React from 'react';

function ExpenseItem(props){

  const useState = React.useState;
  const [data,setData] = useState(props);
  const [edit,setEdit] = useState(null);

  function clone(o){
	  return JSON.parse(JSON.stringify(o));
  }

  function showEditor(e){
    setEdit({
      item: e.target.id,
    });
  }

  function save(e){
    e.preventDefault();
    const input = e.target.firstChild.value;
    const dataCopy = clone(data);
    dataCopy.title = input;
    setData(dataCopy);
    setEdit(null);
  }

  const editTitleOnDoubleClick = (
    <h2 onDoubleClick={showEditor}>
        {
          edit ?
            <div id={data.idx}>
              <form onSubmit={save}> 
                <input type="text" className='input' defaultValue={data.title}/>
              </form>
            </div>
          : 
            <div>{data.title}</div>
        }
    </h2>
  );

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        {editTitleOnDoubleClick}
        <div className='expense-item__price'>{data.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;