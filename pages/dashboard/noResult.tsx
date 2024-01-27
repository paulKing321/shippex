import { Flex, Text, Box } from "@chakra-ui/react"
import Image from "next/image"

export const NoResult = () => {
  return (
      <Flex justifyContent="center" alignItems="center" width="100%" height="100%" m="auto">
        <Flex flexDir="column" columnGap="16px">
            <Image src="/no_result.png" width={249} height={144} alt="empty" />
            <Box mt="8px">
              <Text fontWeight="bold" fontSize="18px" color="black" textAlign="center">No results found</Text>
              <Text color="#6B7280" fontSize="15px">No results found. Please try again.</Text>
            </Box>
        </Flex>
      </Flex>
  )
}