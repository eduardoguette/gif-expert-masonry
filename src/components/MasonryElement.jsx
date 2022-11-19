import { Grid } from '@nextui-org/react'
import { MansonryCard } from './MansonryCard'

let idMasonry = 1
export const MasonryElement = ({ id, items, spacing, column }) => {
  return (
    <Grid
      css={{
        gap: spacing,
        width: '100%'
      }}
      data-id={id}
      aria-label='Grid'
    >
      {
        // eslint-disable-next-line array-callback-return
        items.map((item, indx) => {
          if (idMasonry === column) {
            idMasonry = 1
          }
          if (id === item.idMasonry) {
            return (
              <MansonryCard key={item.id + indx} item={item} spacing={spacing} />
            )
          }
          idMasonry++
        })
      }
    </Grid>
  )
}
