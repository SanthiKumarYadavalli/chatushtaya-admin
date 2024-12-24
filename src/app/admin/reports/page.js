import TableWithFilter from './table-with-filter'

export default async function Page() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className="md:w-2/3 w-[90%]">
        <h1 className="text-2xl m-5">All Reports</h1>
        <TableWithFilter />
      </div>
    </div>
  )
}
