import { useQuery } from '@tanstack/react-query';
import JobListing from './JobListing';
import Loading from './Loading';
import Error from './Error';

export default function JobListingsRecent() {
	// Shows number of most recent jobs
	const jobCount = 3;

	// Fetch jobs data
	const jobsUrl = `${import.meta.env.VITE_URL}/jobs?_limit=${jobCount}`;
	const { isLoading, error, data } = useQuery({
		queryKey: ['repoData'],
		queryFn: () => fetch(jobsUrl).then((res) => res.json()),
	});

	if (isLoading) return <Loading />;

	if (error) return <Error errMsg='Could not load data' />;

	return (
		<section className='bg-blue-50 px-4 py-10'>
			<div className='container-xl lg:container m-auto'>
				<h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
					Most recent
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
					{data.map((job) => {
						return <JobListing key={job.id} data={job} />;
					})}
				</div>
			</div>
		</section>
	);
}
