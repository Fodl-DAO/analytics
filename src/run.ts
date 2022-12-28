import ObjectsToCsv from 'objects-to-csv'
import { exit } from 'process'
import { ChainHandler } from './chainHandler'
import { BSC_CHAIN, ETH_CHAIN, POLYGON_CHAIN } from './env'

const collectors: ChainHandler[] = [
  new ChainHandler(ETH_CHAIN),
  new ChainHandler(POLYGON_CHAIN),
  new ChainHandler(BSC_CHAIN),
]

const run = async () => {
  await Promise.all(collectors.map((c) => c.init().then(() => c.update())))

  const outFileName = `./collection-${new Date().toJSON().slice(0, 10)}.csv`

  for (const c of collectors)
    await new ObjectsToCsv(c.accounts).toDisk(outFileName, {
      allColumns: true,
      append: true,
    })
}

run()
  .then(() => exit(0))
  .catch((e) => {
    console.log('Error', e)
    exit(1)
  })
