import React from "react";
import { useContext, useRef } from "react";
import { CartContext } from "../../context/cart-context";
import s from "./FoodHolder.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee, faPlus } from "@fortawesome/free-solid-svg-icons";
export const FoodHolder = (props) => {
  const inputref = useRef();
  const ctx = useContext(CartContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const amount = +inputref.current.value;

    ctx.addItem({
      name: props.data.name,
      cost: props.data.cost,
      id: props.data.id,
      quantity: amount,
    });

    inputref.current.value = "1";
  };

  // console.log(ctx);
  return (
    <div className={s.container}>
      <div className={s.info}>
        <span className={s.name}>{props.data.name}</span>
        <span className={s.des}>{props.data.name}</span>
        <span className={s.cost}>{props.data.cost} <FontAwesomeIcon icon={faIndianRupee}/></span>
      </div>
      <form onSubmit={submitHandler} className={s.form}>
        <input
          ref={inputref}
          type="number"
          label="amount"
          min={1}
          max={10}
          defaultValue={1}
          className={s.input}
        ></input>
        <button type="sumbit" className={s.btn}>
          <FontAwesomeIcon icon={faPlus} bounce/> Add
        </button>
      </form>
    </div>
  );
};
// setAmount(e => e+1)
// const [amount,setAmount] = useState(props.data.quantity)

// const ctx = useContext(CartContext);
// console.log(ctx);
// console.log(ctx);

// useEffect(()=> {
//   // props.onAdd({id:props.data.id, quantity:amount})
//   // console.log(props.data.id);
//   ctx[props.data.id].quantity = amount;
// }, [amount])
