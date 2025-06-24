import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import ProductPage from "./pages/ProductPage";
import Profile from "./pages/Profile";
import ProfileReviews from "./pages/ProfileReviews";
import JobDetails from "./pages/JobDetails";
import EventDetails from "./pages/EventDetails";
import HowItWorks from "./pages/HowItWorks";
import ContractCreation from "./pages/ContractCreation";
import Contracts from "./pages/Contracts";
import ContractsProfile from "./pages/ContractsProfile";
import CampaignDetails from "./pages/CampaignDetails";
import Messages from "./pages/Messages";
import Privacy from "./pages/Privacy";
import Results from "./pages/Results";
import ReviewContract from "./pages/ReviewContract";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile-reviews" element={<ProfileReviews />} />
        <Route path="job-details" element={<JobDetails />} />
        <Route path="event-details" element={<EventDetails />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="contract-creation" element={<ContractCreation />} />
        <Route path="contracts" element={<Contracts />} />
        <Route path="contracts-profile" element={<ContractsProfile />} />
        <Route path="campaign-details" element={<CampaignDetails />} />
        <Route path="messages" element={<Messages />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="results" element={<Results />} />
        <Route path="review-contract" element={<ReviewContract />} />
      </Route>
    </Routes>
  );
}

export default App; 