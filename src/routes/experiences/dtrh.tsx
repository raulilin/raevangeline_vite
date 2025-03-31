import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/experiences/dtrh')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/experiences/dtrh"!</div>
}
