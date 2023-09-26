import "./DateComponent.css";

export default function DateComponent({ year, month, day }) {
  return (
    <div className="date-component">
      <h4 className="month">{month}</h4>
      <p className="year">{year}</p>
      <h2 className="day">{day}</h2>
    </div>
  );
}
