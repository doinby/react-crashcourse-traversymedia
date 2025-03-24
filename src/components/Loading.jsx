import { Loader } from 'react-feather';

export default function Loading() {
	return (
		<section className='h-96 flex flex-col justify-center items-center gap-4 text-center'>
			<Loader size='48' className='text-gray-400' />
			<p className='text-gray-400'>Loading...</p>
		</section>
	);
}
