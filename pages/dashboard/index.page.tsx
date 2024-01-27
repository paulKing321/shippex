import axios from "axios";
import { DashboardDetails } from "./dashboardDetails";
import { DashboardHeader } from "./dashboardHeader";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

const Dashboard = () => {
  const [showDetails, setShowDetails] = useState(false);
    return (
        <Box height="100vh" maxW="1440px" mx="auto">
            <DashboardHeader setShowDetails={setShowDetails} />
            <DashboardDetails showDetails={showDetails} />
        </Box>
    )
}
export default Dashboard;