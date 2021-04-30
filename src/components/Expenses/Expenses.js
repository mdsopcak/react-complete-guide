import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css'

const Expenses = (props) => {
  return (
    <Card className='expenses'>
      {props.expenses.map((value) => {
        return (
          <ExpenseItem
            key={value.id}
            title={value.title}
            date={value.date}
            amount={value.amount}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
