import { Box } from "@chakra-ui/react"
// import logo from '/logo.png'
import Image from "next/image"

export const Navbar = () => {
    return (
        <Box p={{ base: 8, md: 12 }}>
            <Image src="/logo.png" width={184} height={32} alt={"logo"} />
        </Box>
    )
}