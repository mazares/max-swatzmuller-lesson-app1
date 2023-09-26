import "./ExpenseItem.css";

import DateComponent from "./DateComponent";

export default function Expenseitem({ eidate, eititle, eiamount }) {
  return (
    <div className="expense-item">
      <div eidate={{}} className="date">
        <DateComponent
          day={eidate.split(`/`).slice(0, 1)}
          mounth={eidate.split(`/`).slice(2, 3)}
          year={eidate.split(`/`).slice(-4)}
        />
      </div>
      <h3 eititle={{}} className="title">
        {eititle}
      </h3>
      <div eiamount={{}} className="amount">
        ${eiamount}
      </div>
    </div>
  );
}
