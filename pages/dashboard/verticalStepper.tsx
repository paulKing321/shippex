import React from 'react';
import { Stepper, Step, StepLabel, Typography, Box, Avatar, StepConnector, StepConnectorProps, StepIconProps } from '@mui/material';
import { makeStyles } from '@mui/styles';

export interface StepData {
  label: string;
  time: string;
  date: string;
  description: string;
  picture: string;
  person: string;
}

interface Props {
  steps: StepData[];
}

const CustomStepConnector = (props: React.JSX.IntrinsicAttributes & StepConnectorProps) => {
  return <StepConnector {...props} style={{ marginLeft: '124px' }} />;
};

const CustomStepIcon = (props: StepIconProps) => {
  return (
    <div style={{ width: '16px', height: '16px', backgroundColor: '#6B7280', borderRadius: '50%' }} />
  );
};

const VerticalStepper: React.FC<Props> = ({ steps }) => {

  return (
    <div style={{ width: '100%', color: '#6B7280', marginBottom: '8px'}}>
      <Typography fontWeight="bold" color="black" style={{ paddingLeft: '16px' }}>TIMELINE</Typography>
      <Stepper orientation="vertical" connector={<CustomStepConnector />}>
        {steps.map((step, index) => (
          <Step key={index}>
            <Box style={{ paddingLeft: '16px', paddingRight: '16px', marginBottom: '2px', display: 'grid', gridTemplateColumns: 'auto 1fr', columnGap: '16px', alignItems: 'center' }}>
              <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="subtitle2">{step.time}</Typography>
                <Typography variant="subtitle2">{step.date}</Typography>
              </Box>
              <StepLabel StepIconComponent={CustomStepIcon}>
                <Box>
                  <Typography variant="body2">{step.label}</Typography>
                  <Typography variant="body2">{step.description}</Typography>
                  <Box display="flex" alignItems="center">
                    {step.picture && <Avatar alt={step.person} src={step.picture} style={{ width: '32px', height: '32px', marginRight: '8px' }} />}
                    <Typography variant="body2">{step.person}</Typography>
                  </Box>
                </Box>
              </StepLabel>
            </Box>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default VerticalStepper;
