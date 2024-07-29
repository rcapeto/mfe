import { useEffect, useState } from "react";
import { withSuspense } from "../../hocs/withSuspense";

type CardProps = {
   href?: string,
}

function Card({ href = '' }: CardProps) {
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
      <mfe2-card href={href} />
   )
}

export const Mfe2Card = withSuspense<CardProps>()(Card)