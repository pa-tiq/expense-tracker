import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import React from 'react';

function ExpenseItem(props){

  const useState = React.useState;
  const [title,setTitle] = useState(props.title);
  const [edit,setEdit] = useState(null);

  function clone(o){
	  return JSON.parse(JSON.stringify(o));
  }

  function showEditor(e){
    setEdit({
      item: e.target.id,
    });
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(e.target);
    const input = e.target.firstChild.value;
    setTitle(input);
    setEdit(null);
  }

  function handleBlur(e){
    console.log("lost focus");
    setEdit(null);
  }

  function handleKeyDown(e){
    if(e.key == "Escape"){
      setEdit(null);
    }
  }

  const editTitleOnDoubleClick = (
    <h2 onDoubleClick={showEditor}>
        {
          edit ?
            <div id={props.idx}>
              <form onSubmit={handleSubmit} onBlur={handleBlur} onKeyDown={handleKeyDown}> 
                <input type="text" className='input' defaultValue={title}/>
              </form>
            </div>
          : 
            <div>{title}</div>
        }
    </h2>
  );

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        {editTitleOnDoubleClick}
        <div className='expense-item__price'>{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;