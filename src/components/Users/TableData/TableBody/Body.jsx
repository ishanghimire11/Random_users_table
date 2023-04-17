function Body({ data }) {

	const Details = data.map((userdata) => {

		const {
			picture: { large },
			name: { title, first, last },
			phone,
			email,
			gender,
			login: { uuid },
			location: { city, country },
			dob: { date, age },
		} = userdata;

		const fullName = `${title}. ${first} ${last}`;

		const fullAddress = `${city},${country}`;

		const dateSlice = {
			start: 0,
			end: 10,
		};

		const formattedDOB = date.slice(dateSlice.start, dateSlice.end);

		return (
			<tbody className="mt-6 even:bg-stone-50 odd:bg-slate-200" key={uuid}>
				<tr
					className={"cursor-pointer hover:bg-gray-300 duration-200"}
				>

					<td className="py-8 pl-4">
						<img
							src={large}
							alt="userimage"
							className="w-14 inline-block rounded-full mr-3"
						/>
						<span className="inline-block">{fullName}</span>
					</td>

					<td className="capitalize tracking-wide py-8">
						{gender}
					</td>

					<td className="py-8">
						{age}
					</td>

					<td className="py-8">
						{phone}
						<p className="opacity-50 mt-1">{email}</p>
					</td>

					<td className="py-8">
						{fullAddress}
					</td>

					<td className="text-center py-8">
						{formattedDOB}
					</td>
				</tr>
			</tbody>
		);
	});

	return (Details);
}

export default Body;
