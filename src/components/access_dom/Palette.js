const Palette = ({ divRef }) => {
  const onClickButton = (e) => {
    if (divRef.current) {
      divRef.current.style.background = e.target.style.background;
    }
  };

  return (
    <div>
      <button onClick={onClickButton} style={{ background: 'red' }}>
        빨강
      </button>
      <button onClick={onClickButton} style={{ background: 'yellow' }}>
        노랑
      </button>
      <button onClick={onClickButton} style={{ background: 'green' }}>
        초록
      </button>
    </div>
  );
};

export default Palette;
