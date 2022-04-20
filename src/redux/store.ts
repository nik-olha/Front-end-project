import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "./reducer";

function saveToLocalStorage(state: any) {
  try{
    const localStorageState = JSON.stringify(state);
    localStorage.setItem("state", localStorageState)
  } catch(e){
    console.log(e)
  }
}

function loadFromLocalStorage(){
  const localStorageState = localStorage.getItem("state")
  if(localStorageState === null) return undefined
  return JSON.parse(localStorageState)
}

const storeFactory = () => {
  const middleware = [thunk];
  const reduxStore = createStore(
    Reducer, loadFromLocalStorage(),
    composeWithDevTools(applyMiddleware(...middleware))
  );
  reduxStore.subscribe(()=> saveToLocalStorage(reduxStore.getState()))
  return reduxStore;
};

export default storeFactory;
