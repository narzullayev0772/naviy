import React from "react";
import {Box, Typography} from "@mui/joy";
import {stats} from "../../../../utils/stats";
import CountUp from "react-countup";

const Stats = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: "20px 0",
                gap: "10px"
            }}
        >
            {stats.map((e, i) => {
                return (
                    <Box
                        key={i}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <Typography
                            level="h2"
                            fontWeight={"500"}
                        >
                            <CountUp
                                end={e.value}
                                duration={5}
                                suffix="+"
                                separator=" "
                                scrollSpyOnce={true}
                            />
                        </Typography>
                        <Typography>{e.label}</Typography>
                    </Box>
                );
            })}
        </Box>
    );
};

export default Stats;
