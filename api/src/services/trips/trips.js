import { db } from 'src/lib/db'

export const trips = () => {
  return db.trip.findMany()
}

export const trip = ({ id }) => {
  return db.trip.findUnique({
    where: { id },
  })
}

export const createTrip = ({ input }) => {
  return db.trip.create({
    data: input,
  })
}

export const updateTrip = ({ id, input }) => {
  return db.trip.update({
    data: input,
    where: { id },
  })
}

export const deleteTrip = ({ id }) => {
  return db.trip.delete({
    where: { id },
  })
}
