import { store } from "./store.js";

export function handleMatchIncrement(selector,index) {
    const input = document.querySelector(selector);
    input.addEventListener("keydown",(e) => {
        if(e.keyCode === 13) {
         e.preventDefault();
         store.dispatch({
             type: "INCREMENT",
             payload: {
                 index,
                 value: parseInt(input.value)
             }
         })
         input.value = "";
        }
     });

}

export function handleMatchDecrement(selector,index) {
    const input = document.querySelector(selector);
    input.addEventListener("keydown",(e) => {
        if(e.keyCode === 13) {
            e.preventDefault();
            store.dispatch({
                index,
                type: "DECREMENT",
                payload: {
                    index,
                    value: parseInt(input.value)
                }
            })
            input.value = "";
        }
    }); 
}

export function handleMatchReset() {
    document.querySelector(".lws-reset").addEventListener("click",() => {
        store.dispatch({
            type: "RESET"
        })
    
        document.querySelectorAll("[data-increment]").forEach((input) => {
           input.value = "";
        });
    
         document.querySelectorAll("[data-decrement]").forEach((input) => {
           input.value = "";
        });
    });
}