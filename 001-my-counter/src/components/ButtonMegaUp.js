function ButtonMegaUp({ count, onClick }) {
  return <button onClick={() => onClick(count + 10)}>ебашь, чё ты</button>;
}

export default ButtonMegaUp;
