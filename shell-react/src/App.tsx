import './index.css'
import { MiniShellReactCard } from './microfrontends/mini-shell-react'

export default function App() {
  return(
    <div className="container">
      <h1>Shell - React</h1>

      <div style={{ marginTop: 20 }}>
        <MiniShellReactCard 
          hrefMfe1Card="mfe1/page1"
          hrefMfe2Card="mfe2/page1"
        />
      </div>
    </div>
  )
}