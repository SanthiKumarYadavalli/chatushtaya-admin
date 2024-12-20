import { columns } from './columns'
import TableWithFilter from './table-with-filter'
import { fetchAllReports } from '@/backend/utils';

export default async function Page() {
  const reports = await fetchAllReports();
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="md:w-2/3 w-[90%]">
        <h1 className="text-xl">Reports</h1>
        <TableWithFilter columns={columns} data={reports} />
      </div>
    </div>
  )
}
