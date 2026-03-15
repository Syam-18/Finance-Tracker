import { Route, Routes } from "react-router";
import OnboardingPage from "./components/OnboardingPage";
import DashboardPage from "./components/DashboardPage";
import AppLayout from "./layouts/AppLayout";
import './App.css'

const App = () => {
  return (
    <Routes>
      {/* No Sidebar */}
      <Route path="/" element={<OnboardingPage />} />

      {/* With Sidebar */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* <Route path='*' element={<NotFound/>} /> */}
      </Route>
    </Routes>
  );
};

export default App;
