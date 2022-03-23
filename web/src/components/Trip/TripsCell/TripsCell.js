import { Link, routes } from '@redwoodjs/router'

import Trips from 'src/components/Trip/Trips'

export const QUERY = gql`
  query FindTrips {
    trips {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No trips yet. '}
      <Link to={routes.newTrip()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ trips }) => {
  return <Trips trips={trips} />
}
