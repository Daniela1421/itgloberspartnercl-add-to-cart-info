import React from "react"; 

const ButtonGroup = () => {
  return (
    <>
      <div className="mb4 flex justify-center">
        <button className="br3 pa4 b--none bg-near-black white">CONTINÚA COMPRANDO</button>
      </div>
      <div className=" flex justify-around">
        <a className="no-underline underline-hover red" href="/checkout/#/cart">FINALIZAR COMPRA</a>
        <a className="no-underline underline-hover red" href="/">VER CARRITO</a>
      </div>  
    </>
  )
}

export default ButtonGroup; 