import axios from "axios";
import { DashboardDetails } from "./dashboardDetails";
import { DashboardHeader } from "./dashboardHeader";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { ToastMessage } from "../../components/alerts/ToastContainer";
import PullToRefresh from "react-simple-pull-to-refresh";

const Dashboard = () => {
  const [showDetails, setShowDetails] = useState(false);
  const handleRefresh = async () => {
    ToastMessage('Please enter your AWB ID to track', 'info', 1000)
    setShowDetails(false);
  };
    return (
      <PullToRefresh onRefresh={handleRefresh}>
        <Box height="100vh" maxW="1440px" mx="auto">
            <DashboardHeader setShowDetails={setShowDetails} />
            <DashboardDetails showDetails={showDetails} />
        </Box>
      </PullToRefresh>
    )
}
export default Dashboard;