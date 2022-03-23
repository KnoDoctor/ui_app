import { trips, trip, createTrip, updateTrip, deleteTrip } from './trips'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('trips', () => {
  scenario('returns all trips', async (scenario) => {
    const result = await trips()

    expect(result.length).toEqual(Object.keys(scenario.trip).length)
  })

  scenario('returns a single trip', async (scenario) => {
    const result = await trip({ id: scenario.trip.one.id })

    expect(result).toEqual(scenario.trip.one)
  })

  scenario('creates a trip', async () => {
    const result = await createTrip({
      input: { title: 'String', body: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a trip', async (scenario) => {
    const original = await trip({ id: scenario.trip.one.id })
    const result = await updateTrip({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a trip', async (scenario) => {
    const original = await deleteTrip({ id: scenario.trip.one.id })
    const result = await trip({ id: original.id })

    expect(result).toEqual(null)
  })
})
