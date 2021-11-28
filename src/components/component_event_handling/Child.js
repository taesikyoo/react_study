const Child = ({ count, setCount, children }) => {
  return (
    <div>
      <h1>{count}</h1>
      {children}
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
};

export default Child;
