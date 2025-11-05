import '../index.css'
import '../componets/button'
import Btn from '../componets/button'
function BoardScreen({list}) {
  
    return(
        <div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Plano Diário</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
  {
    list.map((tas) =>(
      <Btn title={tas.title} describe={tas.describe}></Btn>
    ))
  }
  </div>
</div>
    )
}
export default BoardScreen