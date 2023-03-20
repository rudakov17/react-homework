function ButtonDown({ count, onClick }) {
  return <button onClick={() => onClick(count - 1)}>убавь, ты чё</button>;
}

export default ButtonDown;
