import { appendMatch } from "./appendMatch.js";
import { handleMatchDecrement, handleMatchIncrement, handleMatchReset } from "./matchHelper.js";
import { store } from "./store.js";

const updateResult = () => {
    document.querySelectorAll(".lws-singleResult").forEach((result, index) => {
        result.innerText = store.getState().countsArray[index].count;
    })
}

updateResult();

store.subscribe(() => {
    console.log(store.getState());
    updateResult();
});

handleMatchIncrement("[data-increment='1']", 0)
handleMatchDecrement("[data-decrement='1']", 0)
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


document.querySelector(".lws-addMatch").addEventListener("click",() => {
    appendMatch();
    store.dispatch({
        type: "ADD_MATCH",
        payload: document.querySelectorAll(".lws-singleResult").length - 1
    })
})