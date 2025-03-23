import { XOctagon } from 'react-feather';
import { Link } from 'react-router';

export default function NotFoundPage() {
	return (
		<section className='h-96 flex flex-col justify-center items-center text-center'>
			<XOctagon size='48' className='mb-4 text-red-400' />
			<h1 className='text-6xl font-bold mb-4'>404 Not Found</h1>
			<p className='text-xl mb-5'>This page does not exist</p>
			<Link
				to='/'
				className='text-white bg-indigo-700 hover:bg-indigo-900 rounded-lg px-3 py-2 mt-4'
			>
				Go Back
			</Link>
		</section>
	);
}
