function ButtonReset({ count, onClick }) {
  return (
    <button onClick={() => onClick((count = 0))}>
      давай по новой, всё хуйня
    </button>
  );
}

export default ButtonReset;
