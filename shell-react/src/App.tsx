import './index.css'
import { MiniShellAngularCard } from './microfrontends/mini-shell-angular/Card'
// import { MiniShellReactCard } from './microfrontends/mini-shell-react'

export default function App() {
  return(
    <div className="container">
      <h1>Shell - React</h1>

      <div className="cards-container">
        {/* <MiniShellReactCard 
          hrefMfe1Card="mfe1/page1"
          hrefMfe2Card="mfe2/page1"
        /> */}

        <MiniShellAngularCard />
      </div>
    </div>
  )
}