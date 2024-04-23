import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import moment from 'moment';
import { useSelector } from "react-redux";
import { selectUserInfo } from "../../slice/myAnimeListSlice.selector";


import { useStyles } from "./styles";
import DetailSection from "../../components/DetailSection";
import ProfileChart from "../../components/ProfileChart";

const Profile = () => {
    const classes = useStyles();
    const userInfo = useSelector(selectUserInfo);
    const { name, picture, gender, location, joinedAt } = userInfo;

    return (
        <Box className={classes.root}>
            <Box className={classes.content}>
                <Box className={classes.left}>
                    <Avatar
                        src={picture}
                        alt={name}
                        className={classes.profilePicture}
                        variant="rounded"
                        sx={{ width: 250, height: 250 }}
                    />
                    <Box className={classes.personalInfo}>
                        <Box className={classes.personalInfoEntry}>
                            <Typography><b>Gender</b></Typography>
                            <Typography textTransform="capitalize">{gender}</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.personalInfo}>
                        <Box className={classes.personalInfoEntry}>
                            <Typography><b>Location</b></Typography>
                            <Typography textTransform="capitalize">{location}</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.personalInfo}>
                        <Box className={classes.personalInfoEntry}>
                            <Typography><b>Joined</b></Typography>
                            <Typography textTransform="capitalize">
                                {moment(joinedAt).format('ll')}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.right}>
                    <DetailSection label="Statistics">
                        <ProfileChart />
                    </DetailSection>
                </Box>
            </Box>
        </Box>
    );
};

export default Profile;
