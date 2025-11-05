import '../index.css'
import { useState } from 'react'
function Btn({title, describe}){
      const [displayBlock, setDisplayBlock] = useState(true);
      const [visibleTextCard, setVisibleTextCard] = useState(false);
    
  const now = new Date();
 const hourAndMinutes = now.toLocaleTimeString("pt-BR", {
  hour: "2-digit",
  minute: "2-digit"
});

      return(
        <>
        <section  id='contenderCards' style={{display: displayBlock? "block": "none"}}>
      <div class="cardButton" >
  <div class="card-body">
    <div id='titleCard'>
    <h5 class="card-title">{title}</h5>
    <p>{now.toLocaleDateString()} - {hourAndMinutes} </p>
 </div>
    <p class="card-text">{describe}</p>
    <div id='SectionButton'>
    <button class="btn btn-primary" onClick={
      () => {setDisplayBlock(false) 
      alert("Item removido com sucesso!!")
    }
      }>Remove</button>
  </div>
  </div>
</div>
    </section>
        </>
    )
}
export default Btn