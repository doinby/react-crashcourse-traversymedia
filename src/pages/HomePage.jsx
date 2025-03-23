import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListingsRecent from '../components/JobListingsRecent';
import ViewAllButton from '../components/ViewAllButton';

export default function HomePage() {
	return (
		<>
			<Hero title='Become a React Devvv' />
			<HomeCards />
			<JobListingsRecent />
			<ViewAllButton />
		</>
	);
}
