import './index.css'
import { MiniShellAngularCard } from './microfrontends/mini-shell-angular/Card'

export default function App() {
  return(
    <div className="container">
      <h1>Shell - React</h1>

      <div className="cards-container">
        <MiniShellAngularCard />
      </div>
    </div>
  )
}