// swap all <a> to React Router's <NavLink to=''>
import { NavLink } from 'react-router';

export default function Navbar() {
	const activeLink =
		'text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';
	const pendingLink =
		'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

	function setLinkStyle(isActive) {
		return isActive ? activeLink : pendingLink;
	}

	return (
		<nav className='bg-indigo-700 border-b border-indigo-500'>
			<div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
				<div className='flex h-20 items-center justify-between'>
					<div className='flex flex-1 items-center justify-center md:items-stretch md:justify-start'>
						<NavLink to='/' className='flex flex-shrink-0 items-center mr-4'>
							<img
								className='h-10 w-auto'
								src='src/assets/images/logo.png'
								alt='React Jobs'
							/>
							<span className='hidden md:block text-white text-2xl font-bold ml-2'>
								React Jobs
							</span>
						</NavLink>
						<div className='md:ml-auto'>
							<div className='flex space-x-2'>
								<NavLink
									to='/'
									className={({ isActive }) => setLinkStyle(isActive)}
								>
									Home
								</NavLink>
								<NavLink
									to='/jobs'
									className={({ isActive }) => setLinkStyle(isActive)}
								>
									Jobs
								</NavLink>
								<NavLink
									to='/add-job'
									className={({ isActive }) => setLinkStyle(isActive)}
								>
									Add Job
								</NavLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
