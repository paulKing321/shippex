import { Flex, Text, calc } from "@chakra-ui/react"
import Image from "next/image"

export const EmptyDetails = () => {
  return (
      <Flex justifyContent="center" alignItems="center" width="100%" height="100%" m="auto">
        <Flex flexDir="column" columnGap="16px">
            <Image src="/empty.png" width={249} height={144} alt="empty" />
            <Text color="#6B7280" fontSize="15px">Enter a valid AWB ID to display details</Text>
        </Flex>
      </Flex>
  )
}