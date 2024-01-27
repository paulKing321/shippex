import { Box } from "@chakra-ui/react"
import { EmptyDetails } from "./emptyDetails"
import { FullDetails } from "./fullDetails"

type IProps = {
    showDetails: boolean;
}
export const DashboardDetails = ({showDetails}: IProps) => {
    return (
        <Box height="78vh">
           {showDetails ? <FullDetails /> : <EmptyDetails />} 
        </Box>
    )
}