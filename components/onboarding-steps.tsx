"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Badge } from "@/components/ui/badge";
import CreateCampaignForm from "@/components/create-campaign-form";
import OnboardingStep1 from '@/components/onboarding-step1';
import OnboardingStep2 from '@/components/onboarding-step2';
import OnboardingStep3 from '@/components/onboarding-step3';

const steps = [{title:'Complete profile',component:<OnboardingStep1/>},{title:'Business Setup',component:<OnboardingStep2/>},{title:'Account Verification',component:<OnboardingStep3/>}];

export default function OnboadingSteps() {
    
      //const c = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState<{
    [k: number]: boolean;
  }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    setCompleted({
      ...completed,
      [activeStep]: true,
    });
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step.title} completed={completed[index]} sx={{
            '& .MuiStepLabel-root .Mui-completed': {
              color: '#E66313', // circle color (COMPLETED)
            },
            // '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
            //   {
            //     color: 'grey.500', // Just text label (COMPLETED)
            //   },
            '& .MuiStepLabel-root .Mui-active': {
              color: '#E66313', // circle color (ACTIVE)
            },
            // '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
            //   {
            //     color: 'common.white', // Just text label (ACTIVE)
            //   },
            '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
              fill: 'white', // circle's number (ACTIVE)
            },
          }}>
            <StepButton  onClick={handleStep(index)} style={{color:"green"}}>
              {step.title}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* <Typography sx={{ mt: 2, mb: 1, py: 1 }}>
              Step {activeStep + 1}
            </Typography> */}
           <div className='py-2'>{steps[activeStep].component}</div>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                //sx={{}}
                sx={{"background":"#E66313","color":"white",mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {/* <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button> */}
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete} sx={{"background":"#E66313","color":"white"}} >
                    {completedSteps() === totalSteps() - 1
                      ? 'Publish'
                      : 'Proceed'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
