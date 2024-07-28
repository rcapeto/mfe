import { useEffect, useState } from "react";
import { withSuspense } from "../../hocs/withSuspense";

function Router() {
   const [hasError, setHasError] = useState(false)

   function loadModule() {
      import('mfe2/RouterWebComponent').then(module => {
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
         <p>Erro ao renderizar as rotas do mfe2</p>
      )
   }

   return (
      <app-mfe2-root />
   )
}

export const Mfe2Router = withSuspense()(Router)