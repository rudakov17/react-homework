function ButtonMegaDown({ count, onClick }) {
  return (
    <button onClick={() => onClick(count - 10)}>давай назад, ты чё</button>
  );
}

export default ButtonMegaDown;
