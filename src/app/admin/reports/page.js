import { columns } from './columns'
import TableWithFilter from './table-with-filter'
import { reports } from '../../../../backend/dummy'

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="md:w-2/3 w-[90%]">
        <h1 className="text-xl">Reports</h1>
        <p className="text-sm mb-10 mt-3 text-muted-foreground">Click on a row to see the detailed report.</p>
        <TableWithFilter columns={columns} data={reports} />
      </div>
    </div>
  )
}
