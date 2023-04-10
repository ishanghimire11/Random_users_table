function Heading() {

	const headingStyles = "py-4 ml-8 tracking-wider";
	return (
		<>
			<thead className="uppercase border-gray-300 bg-stone-50 border-b-2 pl-2">
				<tr>
					<th className={`w-20 pl-4 ${headingStyles}`}>No.</th>
					<th className={`w-72 ${headingStyles}`}>Name</th>
					<th className={`w-28 ${headingStyles}`}>Gender</th>
					<th className={`w-20 ${headingStyles}`}>Age</th>
					<th className={`w-48 ${headingStyles}`}>Contact</th>
					<th className={`w-48 ${headingStyles}`}>Address</th>
					<th className={`w-36 ${headingStyles}`}>Date of Birth</th>
				</tr>
			</thead>
		</>
	);
}

export default Heading;
