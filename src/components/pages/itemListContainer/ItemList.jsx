
export const ItemList = ({contador, setContador}) => {
  return (
    <>
    {/* <Counter/> */}
    <h2>{contador}</h2>
    
    <button
      onClick={() => {
        setContador(contador + 1);
      }}
    >
      Sumar
    </button>

    <button
      onClick={() => {
        setContador(contador - 1);
      }}
    >
      Restar
    </button>
  </>
  )
}
