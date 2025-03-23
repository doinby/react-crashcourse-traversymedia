import jobs from '../jobs.json';
import JobListing from './JobListing';

export default function JobListingsRecent() {
	// Shows number of most recent jobs
	const jobCount = 3;

	return (
		<section className='bg-blue-50 px-4 py-10'>
			<div className='container-xl lg:container m-auto'>
				<h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
					Most recent
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{jobs.map((job, idx) => {
						if (idx < jobCount) {
							return <JobListing key={job.id} data={job} />;
						}
					})}
				</div>
			</div>
		</section>
	);
}
