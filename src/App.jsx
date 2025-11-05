import { useState } from 'react'
import '../src/index.css'
import './componets/button'
import './componets/button'
import BoardScreen from './componets/BoardScreen'
import Btn from './componets/button'

function App() {
  const [list, setList] = useState([]);
  const [card, setCard] = useState({
    title: '',
    describe:''
  });

  function setingForms(e){
    setCard({
      ...card,
      [e.target.name]: e.target.value
    })
  }
  function addList() {
    setList([...list,card])
    
  }

  return (
    <>

      <header id="nameHeader">
        <h1>Daily Tasks</h1>
      </header>

      <section id="forms">
        <div id="devForms">
        <h2>Task name:</h2>
        <input type="text" id="inputextTitle" name="title" onChange={setingForms} />
        <br />
        <h2>Describe task:</h2>
        <textarea id="inputextDesc" name="describe" onChange={setingForms}></textarea>
        <div id="formmbtn">
          <button id="btnSubmit" onClick={addList}> Adicionar</button>
        </div>
        </div>
      </section>

    <section id='SectionCard'>
      <h3>Task pane</h3>
      <BoardScreen list={list}>
      </BoardScreen>
    </section>
    </>
  )
}

export default App
