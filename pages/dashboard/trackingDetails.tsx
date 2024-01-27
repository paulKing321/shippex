import { Box, Text, Flex } from "@chakra-ui/react"
import {data} from "../../data";
import { AiFillAccountBook } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";
import { GoPerson } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { LuArrowDownToDot } from "react-icons/lu";
import { LiaTruckMovingSolid } from "react-icons/lia";
import { LuReceipt } from "react-icons/lu";

export const TrackingDetails = () => {
  return (
    <Box border="1px solid #6B7280" borderRadius="8px" color="#6B7280" fontSize="14px" pt="2" w="100%" height="fit-content">
      <Box px="4">
        <Text fontWeight="bold" color="black" fontSize="18px">{data.id}</Text>
        <Text>Last updated {data.time} {data.date}</Text>
      </Box>
      <Flex mt="20px" w="90%" mx="auto" justifyContent="space-between">
        <Flex columnGap="12px" width="40%" alignItems="center">
          <MdArrowOutward />
          <Text>Sender</Text>
        </Flex>
        <Flex w="50%">
          <Text color="black" fontWeight="bold">{data.sender}</Text>
        </Flex>
      </Flex>
      <Flex mt="20px" w="90%" mx="auto" justifyContent="space-between">
        <Flex columnGap="12px" width="40%" alignItems="center">
          <GoPerson />
          <Text>Consignee</Text>
        </Flex>
        <Flex w="50%">
          <Text color="black" fontWeight="bold">{data.consignee}</Text>
        </Flex>
      </Flex>
      <Flex mt="20px" w="90%" mx="auto" justifyContent="space-between">
        <Flex columnGap="12px" width="40%" alignItems="center">
          <LuArrowDownToDot />
          <Text>Origin Address</Text>
        </Flex>
        <Flex w="50%">
          <Text color="black" fontWeight="bold">{data.origin_address}</Text>
        </Flex>
      </Flex>
      <Flex mt="20px" w="90%" mx="auto" justifyContent="space-between">
        <Flex columnGap="12px" width="40%" alignItems="center">
          <IoLocationOutline />
          <Text>Destination Address</Text>
        </Flex>
        <Flex w="50%">
          <Text color="black" fontWeight="bold">{data.destination_address}</Text>
        </Flex>
      </Flex>
      <Flex mt="20px" w="90%" mx="auto" justifyContent="space-between">
        <Flex columnGap="12px" width="40%" alignItems="center">
          <LiaTruckMovingSolid />
          <Text>Shipping Service</Text>
        </Flex>
        <Flex w="50%">
          <Text color="black" fontWeight="bold">{data.shipping_service}</Text>
        </Flex>
      </Flex>
      <Flex mt="20px" w="100%" px="5%" mx="auto" justifyContent="space-between" bgColor="#F8FAFC" h="66px" alignItems="center">
        <Flex columnGap="12px" width="40%" alignItems="center">
          <LuReceipt />
          <Text>Total COD Amount</Text>
        </Flex>
        <Flex w="50%">
          <Text color="black" fontWeight="bold">{data.total_cod_amount}</Text>
        </Flex>
      </Flex>
    </Box>
  )
}