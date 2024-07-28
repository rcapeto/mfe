import { lazy } from 'react'
import { withErrorBoundary } from '../../hocs/withErrorBoundary'
import { withSuspense } from '../../hocs/withSuspense'
import { compose } from '../../utils/compose'

type CardProps = {
   href?: string,
}

type RouteProps = {
   baseUrl?: string,
}


const Card = lazy(() => import('mfe1/Card').catch(err => {
   throw err
}))

const Routes = lazy(() => import('mfe1/Routes').catch(err => {
   throw err
}))

const Router = lazy(() => import('mfe1/Router').catch(err => {
   throw err
}))

export const Mfe1Card = compose<CardProps>(
   withSuspense(),
   withErrorBoundary({ errorMessage: 'Erro ao renderizar o card do mfe1' }),
)(Card)

export const Mfe1Router = compose<RouteProps>(
   withSuspense(),
   withErrorBoundary({ errorMessage: 'Erro ao renderizar o router do mfe1' }),
)(Router)

export const Mfe1Routes = compose<RouteProps>(
   withSuspense(),
   withErrorBoundary({ errorMessage: 'Erro ao renderizar o routes do mfe1' }),
)(Routes)