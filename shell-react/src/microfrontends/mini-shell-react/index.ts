import { lazy } from 'react';
import { withErrorBoundary } from '../../hocs/withErrorBoundary';
import { withSuspense } from '../../hocs/withSuspense';
import { compose } from '../../utils/compose';

type CardProps = {
   hrefMfe1Card?: string;
   hrefMfe2Card?: string;
 };
 

const Card = lazy(() => import('miniShellReact/Card').catch(err => {
   throw err
}))


export const MiniShellReactCard = compose<CardProps>(
   withSuspense(),
   withErrorBoundary({ errorMessage: 'Erro ao renderizar o card do mini-shell-react' }),
)(Card)