import './App.css';
import React, {useRef} from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;
  const task2Val = useRef();
  const task4Val = useRef();
  const text5div = useRef();
  const text6div = useRef();
  const colorTask7 = useRef();

  function task1() {
      console.log('task2');
  }
  function task2(event) {
      task2Val.current.classList.add('active');
      // event.target.classList.add('active');
  }
  function task3(event) {
      console.log(event.target.value);
  }
  function task4() {
      count4++;
      task4Val.current.value = count4;
      console.log(count4)
  }
  function task5(event) {
      if (event.target.checked) {
          text5div.current.innerHTML = event.target.value;
      } else {
          text5div.current.innerHTML = 0;
      }
  }
  function task6(event) {
          text6div.current.innerHTML = event.target.value;
  }

  function randomInt(a = 0, b = 255) {
        let rand = a + Math.random() * (b + 1 - a);
        return Math.round(rand);
  }

  function task7() {
      colorTask7.current.style.background = `rgb(${randomInt()},${randomInt()},${randomInt()})`;
  }
  function task8() {

  }
  function task9() {

  }
  let ar10 = [5, 6, 7];
  function task10() {

  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2} ref={task2Val}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3}/>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4} ref={task4Val}>Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5}/>
        <div className="out-5" ref={text5div}></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6" ref={text6div}></div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={colorTask7}></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8"></input>
        <div className="out-8"></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9"></input>
        <div className="out-9"></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10"></input>
        <button className="task-10">Push</button>
      </section>
    </>
  );
}

export default App;
