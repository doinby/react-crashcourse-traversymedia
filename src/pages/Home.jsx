import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ViewAll from '../components/ViewAll';

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero title='Become a React Devvv' />
			<HomeCards />
			<JobListings />
			<ViewAll />
		</>
	);
}
