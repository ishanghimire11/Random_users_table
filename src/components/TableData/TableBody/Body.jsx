import { useContext } from "react";
import { UserContext } from "/src/components/RetrieveUser/GetUser";

function Body() {
	const { searchData, sortedArray } = useContext(UserContext);
	const searchInfo = {
		length: searchData.length,
		zero: 0,
	};

	if (searchData.length === searchInfo.zero) {
		return (
			<tbody>
				<tr>
					<td colSpan={10} className="text-center opacity-50">
          			No user found. Try again with different name
					</td>
				</tr>
			</tbody>
		);
	} else {
		return sortedArray.map((data, index) => {
			const {
				picture: { large },
				name: { title, first, last },
				phone,
				email,
				gender,
				login: { uuid },
				location: { city, country },
				dob: { date, age },
			} = data;

			const fullName = `${title}. ${first} ${last}`;

			const indexPlus = {
				indexAdd: 1,
				indexLessThan: 10,
				addZero: "0",
			};

			const displayIndex = index + indexPlus.indexAdd;

			const userCount = () => {
				if (displayIndex < indexPlus.indexLessThan) {
					return `${indexPlus.addZero}${displayIndex}`;
				}
				return `${displayIndex}`;
			};

			const fullAddress = `${city},${country}`;
			const dateSlice = {
				start: 0,
				end: 10,
			};
			const formattedDOB = date.slice(dateSlice.start, dateSlice.end);

			const rowColor = {
				divide: 2,
				reminder: 0,
				graybackground: "bg-slate-200",
				whitebackground: "bg-stone-50",
			};

			const getRowBackground = () => {
				if (displayIndex % rowColor.divide === rowColor.reminder) {
					return rowColor.whitebackground;
				}
				return rowColor.graybackground;
			};

			return (
				<tbody className="mt-6" key={uuid}>
					<tr
						className={`${getRowBackground()} cursor-pointer hover:bg-gray-300 duration-200`}
					>
						<td className="py-8 pl-4">
							<span className="font-semibold">
								{userCount()}.
							</span>
						</td>

						<td className="py-8">
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
	};
}

export default Body;
