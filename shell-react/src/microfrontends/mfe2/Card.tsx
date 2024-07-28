import { useEffect, useState } from "react";
import { withSuspense } from "../../hocs/withSuspense";

function Card() {
   const [hasError, setHasError] = useState(false)

   function loadModule() {
      import('mfe2/CardWebComponent').then(module => {
         setHasError(false)
         module?.default?.()
      }).catch(() => {
         setHasError(true)
      })
   }

   useEffect(() => {
      loadModule()
   }, [])

   if(hasError) {
      return (
         <p>Erro ao renderizar o card do mfe2</p>
      )
   }

   return (
      <mfe2-card href="mfe2" />
   )
}

export const Mfe2Card = withSuspense()(Card)