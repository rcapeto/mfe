import { lazy } from 'react'
import { withErrorBoundary } from '../../hocs/withErrorBoundary'
import { withSuspense } from '../../hocs/withSuspense'
import { compose } from '../../utils/compose'

type RouteProps = {
   baseUrl?: string,
}

const Routes = lazy(() => import('mfe1/Routes').catch(err => {
   throw err
}))

export const Mfe1Routes = compose<RouteProps>(
   withSuspense(),
   withErrorBoundary({ errorMessage: 'Erro ao renderizar o routes do mfe1' }),
)(Routes)