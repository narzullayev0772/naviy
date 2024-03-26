import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step, {stepClasses} from '@mui/joy/Step';
import StepIndicator, {stepIndicatorClasses} from '@mui/joy/StepIndicator';
import Typography from '@mui/joy/Typography';
import {Divider} from "@mui/joy";
import Card from "@mui/joy/Card";

export default function ResumeStepper({steps}) {
    return <Stepper
        orientation="vertical"
        sx={{
            paddingY: "5%",
            '--Stepper-verticalGap': '2.5rem',
            '--StepIndicator-size': '2.5rem',
            '--Step-gap': '1rem',
            '--Step-connectorInset': '0.5rem',
            '--Step-connectorRadius': '1rem',
            '--Step-connectorThickness': '4px',
            '--joy-palette-success-solidBg': 'var(--joy-palette-success-400)',
            [`& .${stepClasses.completed}`]: {
                '&::after': {bgcolor: 'success.solidBg'},
            },
            [`& .${stepClasses.active}`]: {
                [`& .${stepIndicatorClasses.root}`]: {
                    border: '4px solid',
                    borderColor: '#fff',
                    boxShadow: (theme) => `0 0 0 1px ${theme.vars.palette.primary[500]}`,
                },
            },
        }}
    >
        {steps.map((step, i) => <Step
            completed={step.completed}
            key={i}
            indicator={<StepIndicator
                variant="solid" color={"primary"}>
                {step.indicator}
            </StepIndicator>}
        >
            <Card
                sx={{
                    display: "flex", gap: "10px",

                }}>
                <Typography level="title-sm"

                >{step.title}</Typography>
                <Divider/>
                <Typography
                    level={"body-sm"}
                    sx={{
                        wordBreak: "break-word"
                    }}
                >{step.description}</Typography>
            </Card>
        </Step>)}
    </Stepper>;
}
