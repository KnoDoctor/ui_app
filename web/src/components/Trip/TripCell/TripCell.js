import Trip from 'src/components/Trip/Trip'

export const QUERY = gql`
  query FindTripById($id: Int!) {
    trip: trip(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Trip not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ trip }) => {
  return <Trip trip={trip} />
}
