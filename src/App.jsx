import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router';
import Home from './pages/Home';

const router = createBrowserRouter(
	createRoutesFromElements(<Route index element={<Home />} />)
);

export default function App() {
	return <RouterProvider router={router} />;
}
