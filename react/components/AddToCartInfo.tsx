import React from "react"; 
import { useProduct } from "vtex.product-context";
import { useOrderForm } from "vtex.order-manager/OrderForm"; 
import ButtonGroup from "./ButtonGroup";
import { generateBlockClass } from "@vtex/css-handles";
import styles from "./styles.css"; 

const AddToCartInfo = ({blockClass}: {blockClass:string}) => {
  const container = generateBlockClass(styles.container, blockClass)
  const container__item = generateBlockClass(styles.container__item, blockClass)
  const container__image = generateBlockClass(styles.container__image, blockClass)
  const productInfo = useProduct(); 
  const { orderForm: {
    items, 
    totalizers
  }} = useOrderForm(); 

  console.log("Este producto tiene esta info:", productInfo);
  console.log("esta es mi informacion de totales", totalizers);

  return (
    <div className={`br4 ${container}`}>
      <div className="">
        <p className="f5 pt3 b tc">Tenemos {items.length} productos en tu compra</p>
        {/* <p>Total: ${totalizers[0]?.value / 100}</p> */}
      </div>
      {
      items.map((item: any, index: number) => {
        console.log(item);
        return (
          <div key={index} className={`mb3 pl5 ${container__item}`}>
            <div className="mr4">
              <img className={container__image} src={item.imageUrls.at1x}/>
            </div>
            <div>
              <p className="f6 b">{item.name}</p>
              <p>$ {item.price / 100}</p>
              <p>Cantidad: {item.quantity}</p>
            </div>
          </div>
        )
      })
      }
      
      <ButtonGroup/>
    </div>
  )
}

export default AddToCartInfo