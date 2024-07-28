import './index.css'
import { Mfe1Card } from './microfrontends/mfe1'

export default function App() {
  return(
    <div className="container">
      <h1>Shell</h1>
      <Mfe1Card href="/teste/page1"/>
    </div>
  )
}