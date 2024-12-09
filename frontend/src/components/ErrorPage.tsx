
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError() as any

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Oops!</h1>
      <p className="text-xl mb-4">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-600">
        {error?.statusText || error?.message}
      </p>
    </div>
  )
}