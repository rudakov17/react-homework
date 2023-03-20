function ButtonUp({ count, onClick }) {
  return <button onClick={() => onClick(count + 1)}>прибавь, чё ты</button>;
}

export default ButtonUp;
