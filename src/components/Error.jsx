import { XOctagon } from 'react-feather';

export default function Error({ errMsg = 'Something is wrong' }) {
	return (
		<section className='h-96 flex flex-col justify-center items-center text-center'>
			<XOctagon size='48' className='mb-4 text-red-400' />
			<h1 className='text-6xl font-bold mb-4'>404 Not Found</h1>
			<p className='text-xl mb-5'>{errMsg}</p>
		</section>
	);
}
