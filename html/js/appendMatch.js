import { handleMatchDecrement, handleMatchIncrement } from "./matchHelper.js";

let index = 1;
export function appendMatch() {
    index += 1;
    const matchHTML = `<div class="match">
                        <div class="wrapper">
                            <button class="lws-delete">
                                <img src="./image/delete.svg" alt="" />
                            </button>
                            <h3 class="lws-matchName">Match ${index}</h3>
                        </div>
                        <div class="inc-dec">
                            <form class="incrementForm">
                                <h4>Increment</h4>
                                <input
                                    data-increment="${index}"
                                    type="number"
                                    name="increment"
                                    class="lws-increment"
                                />
                            </form>
                            <form class="decrementForm">
                                <h4>Decrement</h4>
                                <input
                                    data-deccrement="${index}"
                                    type="number"
                                    name="decrement"
                                    class="lws-decrement"
                                />
                            </form>
                        </div>
                        <div class="numbers">
                            <h2 class="lws-singleResult">0</h2>
                        </div>
                      </div>`;
    const allMatches = document.querySelector('.all-matches');
    allMatches.innerHTML += matchHTML;
    handleMatchIncrement(`[data-increment='${index}']`, index - 1)
    handleMatchDecrement(`[data-deccrement='${index}']`, index - 1)
  }
  