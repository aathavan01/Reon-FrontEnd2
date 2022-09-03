import { Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'boxicons/dist/boxicons.min.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import 'remixicon/fonts/remixicon.css'
import 'simple-datatables/src/style.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'apexcharts/dist/apexcharts.min.js'
import 'chart.js/dist/chart.min.js'
import 'echarts/dist/echarts.min.js'
import 'quill/dist/quill.min.js'
import 'simple-datatables/dist/umd/simple-datatables'
import 'tinymce/tinymce.min.js'


import './assets/css/style.css'
import Index from "./user/pages/Index";
import Vehicles from "./user/pages/Vehicles";
import Tracktors from "./user/pages/Vehicle/Farming/Tractors";
import Harvester from "./user/pages/Vehicle/Farming/Harvester";
import Seeders from "./user/pages/Vehicle/Farming/Seeders";
import Autonomous from "./user/pages/Vehicle/Farming/Autonomous";
import Bulldozer from "./user/pages/Vehicle/Constructions/Bulldozer";
import FrontLoaders from "./user/pages/Vehicle/Constructions/FrontLoaders";
import VehicleDetails from "./user/pages/VehicleDetails";
import OwnerPage from "./user/OwnerPage/OwnerPage";
import Dashboard from "./admin/pages/Dashboard";
import Users from "./admin/pages/Users";
import Pages from "./admin/pages/Pages";
import HireBus from "./admin/pages/Hires/Bus";
import VehiclesCar from "./admin/pages/Vehicles/Car";
import VehiclesBus from "./admin/pages/Vehicles/Bus";
import HireCar from "./admin/pages/Hires/Car";
import Profile from "./admin/pages/Profile";
import PageSetting from "./admin/pages/PageSetting";
import PageDetails from "./admin/pages/PageDetails";
import UserProfile from "./user/pages/UserPage";
import TestimonialSlider from "./user/components/Carosel";

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<Index/>} />
			<Route exact path="/vehicles" element={<Vehicles/>} />

			{/* Farming */}
			<Route exact path="/vehicles/tractors" element={<Tracktors/>} />
			<Route exact path="/vehicles/harvester" element={<Harvester/>} />
			<Route exact path="/vehicles/seeders" element={<Seeders/>} />
			<Route exact path="/vehicles/autonomous" element={<Autonomous/>} />
			<Route exact path="/vehicles/harvester" element={<Harvester/>} />

			{/* Construction */}
			<Route exact path="/vehicles/bulldozer" element={<Bulldozer/>} />
			<Route exact path="/vehicles/frontLoaders" element={<FrontLoaders/>} />

			<Route exact path="/vehicles/harvester/id:details" element={<VehicleDetails/>} />

			{/* OwnerProfile and UserProfile */}
			<Route exact path="/ownerPage" element={<OwnerPage/>} />
			<Route exact path="/userPage" element={<UserProfile/>} />

			

			{/* Admin */}
			<Route exact path="/admin/dashboard" element={<Dashboard/>} />
			<Route exact path="/admin/users" element={<Users/>} />
			<Route exact path="/admin/pages" element={<Pages/>} />
			<Route exact path="/admin/vehicles-car" element={<VehiclesCar/>} />
			<Route exact path="/admin/vehicles-bus" element={<VehiclesBus/>} />
			<Route exact path="/admin/hires-car" element={<HireCar/>} />
			<Route exact path="/admin/hires-bus" element={<HireBus/>} />
			<Route exact path="/admin/profile" element={<Profile/>} />
			<Route exact path="/admin/pageSetting" element={<PageSetting/>} />
			<Route exact path="/admin/pageDetails" element={<PageDetails/>} />
			<Route exact path="/carosel" element={<TestimonialSlider/>} />




			


		</Routes>
	);
}

export default App;