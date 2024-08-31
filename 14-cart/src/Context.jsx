import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  DISPLAY_ITEMS,
  LOADING,
} from "./actions";
import cartItems from "./data";
import { getTotalAmount } from "./utils";

const url = "https://www.course-api.com/react-useReducer-cart-project";

const AppContext = createContext();

const defaultState = {
  loading: false,
  // cart: new Map(cartItems.map((item) => [item.id, item])),
  cart: new Map(),
};

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const { totalAmount, totalCost } = getTotalAmount(state.cart);

  function clearCart() {
    return dispatch({ type: CLEAR_CART });
  }

  function removeItem(id) {
    dispatch({ type: REMOVE, payload: { id } });
  }

  function increaseItem(id) {
    dispatch({ type: INCREASE, payload: { id } });
  }

  function decreaseItem(id) {
    dispatch({ type: DECREASE, payload: { id } });
  }

  async function fetchData() {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const cart = await response.json();
    console.log(cart);
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
        totalAmount,
        totalCost,
      }}
    >
      {" "}
      {children}{" "}
    </AppContext.Provider>
  );
}

export function useGlobalContext() {
  return useContext(AppContext);
}
