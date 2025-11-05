import '../index.css'
import { useState } from 'react'
function Btn({title, describe}){
      const [displayBlock, setDisplayBlock] = useState(true);
      const [visibleTextCard, setVisibleTextCard] = useState(false);
    return(
        <>
        <section  id='contenderCards' style={{display: displayBlock? "block": "none"}}>
      <div class="cardButton" >
  <div class="card-body">
    <div id='titleCard'>
    <h5 class="card-title">{title}</h5>
    <p>10/25</p>
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