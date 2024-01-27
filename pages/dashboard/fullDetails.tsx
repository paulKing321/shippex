import { Flex } from "@chakra-ui/react"
import { ITrackDetails } from "./utils"
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import VerticalStepper, { StepData } from "./verticalStepper";
import { TrackingDetails } from "./trackingDetails";
import { NoResult } from "./noResult";

export const FullDetails = () => {
  const steps: StepData[] = [
    {
      label: 'Shipment created',
      time: '12.05am',
      date: 'Dec 16, 2023',
      description: 'Shipment description',
      picture: '/avatar.png',
      person: 'Abdo Saeed'
    },
    {
      label: 'Shipment picked-up',
      time: '14.05am',
      date: 'Dec 16, 2023',
      description: '',
      picture: '/avatarfe.png',
      person: 'Beshouy Ezzat'
    },
    {
      label: 'Proof of pick-up',
      time: '14.08am',
      date: 'Dec 16, 2023',
      description: 'Proof of pick-up description',
      picture: '/avatar.png',
      person: 'James Collins'
    },
    {
      label: 'Shipment on delivery',
      time: '12.05am',
      date: 'Dec 16, 2023',
      description: 'Description goes here',
      picture: '',
      person: ''
    },
  ];

  return (
    <>
      {steps ? (
        <Flex height="95%" justifyContent="space-between" flexDir={{ base: 'column', md: 'row' }} rowGap="16px" w="90%" mx="auto" mt="16px">
          <Flex width={{ base: '100%', md: "45%" }}>
            <TrackingDetails />
          </Flex>
          <Flex width={{ base: '100%', md: "45%" }}>
            <VerticalStepper steps={steps} />
          </Flex>
        </Flex>
      ) : (
        <NoResult />
      )}
    </>
  );
}
