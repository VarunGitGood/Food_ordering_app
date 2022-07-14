export const handler = (state, action) => {
    if (action.type === "add-item") {
      const updatedTotalAmount =
        state.totalAmount + action.item.cost * action.item.quantity;
      const ifexist = state.list.findIndex((e) => e.id === action.item.id);
      console.log(ifexist);
      let updatedItems;
      const existingItem = state.list[ifexist];
  
      if (existingItem) {
        updatedItems = [...state.list];
        updatedItems[ifexist] = {
          ...existingItem,
          quantity: existingItem.quantity + action.item.quantity,
        };
      } else {
        updatedItems = state.list.concat(action.item);
      }
      return {
        ...state,
        list: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    } else if (action.type === "remove-item") {
      const filter = (e) => {
        if (e.id !== action.item.id) {
          return e;
        }
      };
      const ifexist = state.list.findIndex((e) => e.id === action.item.id);
      let updatedItems;
      let tobechanged = state.list[ifexist];
      if (state.list[ifexist].quantity === 1) {
        updatedItems = state.list.filter(filter);
      } else {
        // some amount present
        updatedItems = [...state.list];
        updatedItems[ifexist] = {
          ...tobechanged,
          quantity: tobechanged.quantity - 1,
        };
      }
  
      const updatedTotalAmount = state.totalAmount - action.item.cost;
  
      return {
        ...state,
        list: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }
    else if(action.type === "destroy-cart")
    { 
      const updatedItems = []
      const updatedTotalAmount = 0
  
      return {
        ...state,
        list:updatedItems,
        totalAmount:updatedTotalAmount
      }
    }
    else if(action.type === "update-state")
    {
      console.log(state);
      return {
        ...state,
        loggedIn : action.bool
      } 
    }
    return state;
  };