import { lazy } from 'react'
import { withErrorBoundary } from '../../hocs/withErrorBoundary'
import { withSuspense } from '../../hocs/withSuspense'
import { compose } from '../../utils/compose'

type CardProps = {
   href?: string,
}

const Card = lazy(() => import('mfe1/Card').catch(err => {
   throw err
}))

export const Mfe1Card = compose<CardProps>(
   withSuspense(),
   withErrorBoundary({ errorMessage: 'Erro ao renderizar o card do mfe1' }),
)(Card)
