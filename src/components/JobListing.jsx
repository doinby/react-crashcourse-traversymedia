import { useState } from 'react';
import { MapPin } from 'react-feather';

export default function JobListing({
	data: { id, title, type, description: longDesc, location, salary },
}) {
	const [isLessDesc, setIsLessDesc] = useState(true);
	const maxWords = 16;
	const shortDesc = longDesc.trim().split(/\s+/).slice(0, maxWords).join(' ');

	function toggleMoreDesc() {
		return setIsLessDesc(!isLessDesc);
	}

	return (
		<div key={id} className='bg-white rounded-xl shadow-md relative'>
			<div className='p-4'>
				<div className='mb-6'>
					<div className='text-gray-600 my-2'>{type}</div>
					<h3 className='text-xl font-bold'>{title}</h3>
				</div>

				<p className='mb-2'>
					{isLessDesc ? `${shortDesc}... ` : `${longDesc} `}
					<span>
						<button
							className='cursor-pointer text-indigo-500 text-sm italic underline'
							onClick={toggleMoreDesc}
						>
							{isLessDesc ? 'more' : 'less'}
						</button>
					</span>
				</p>

				<h3 className='text-indigo-500 mb-2'>{salary}</h3>

				<div className='border border-gray-100 mb-5'></div>

				<div className='flex flex-col lg:flex-row justify-between items-baseline mb-4'>
					<div className='flex gap-2 text-orange-700'>
						<MapPin size={18} /> {location}
					</div>
					<a
						href='job.html'
						className='h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm'
					>
						Read More
					</a>
				</div>
			</div>
		</div>
	);
}
