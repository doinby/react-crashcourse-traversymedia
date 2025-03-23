import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<MainLayout />}>
			<Route index element={<HomePage />} />
			<Route path='/jobs' element={<JobsPage />} />
		</Route>
	)
);

export default function App() {
	return <RouterProvider router={router} />;
}
