import UserMap from "/src/components/TableData/TableBody/UserMap";

function Heading() {
  return (
    <>
      <thead className="uppercase border-gray-300 bg-stone-50 border-b-2 pl-2">
        <tr>
          <th className="py-4 ml-8  tracking-wider pl-4 w-20">No.</th>
          <th className="py-4 ml-8  tracking-wider w-72">Name</th>
          <th className="py-4 ml-8  tracking-wider w-28">Gender</th>
          <th className="py-4 ml-8  tracking-wider w-20">Age</th>
          <th className="py-4 ml-8  tracking-wider w-48">Contact</th>
          <th className="py-4 ml-8  tracking-wider w-48">Address</th>
          <th className="py-4 ml-8  tracking-wider w-36">Date of Birth</th>
        </tr>
      </thead>

      <tbody className="mt-6">
        <UserMap />
      </tbody>
    </>
  );
}

export default Heading;
