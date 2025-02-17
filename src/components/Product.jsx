export function Product({ count, setCount }) {
  return (
    <div>
      <h4>Це комопнент Product JSX</h4>
      <h6>{count}</h6>
      <button
        onClick={function () {
          const newValue = count + 1;
          setCount(newValue);
        }}
      >
        Product count++
      </button>
    </div>
  );
}
