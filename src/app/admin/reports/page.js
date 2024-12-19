import { columns } from './columns'
import TableWithFilter from './table-with-filter'
import { reports } from '../../../../backend/dummy'

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="md:w-2/3 w-[90%]">
        <h1 className="text-xl">Reports</h1>
        <TableWithFilter columns={columns} data={reports} />
      </div>
    </div>
  )
}
