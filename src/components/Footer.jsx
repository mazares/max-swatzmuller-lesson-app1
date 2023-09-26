import Expenseitem from "./Expenseitem";

export default function Footer(params) {
  const expenses = [
    { id: `1a`, date: `15/08/2023`, title: `car insurance`, amount: 250 },
    { id: `2a`, date: `16/08/2023`, title: `new tv`, amount: 700 },
  ];

  return (
    <footer className="footer">
      {expenses.map((expense) => {
        return (
          <Expenseitem
            key={expense.id}
            eidate={expense.date}
            eititle={expense.title}
            eiamount={expense.amount}
          />
        );
      })}
    </footer>
  );
}
