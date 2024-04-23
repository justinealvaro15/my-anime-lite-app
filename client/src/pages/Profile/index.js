import React from "react";
import { Box, Typography } from "@mui/material";
import moment from 'moment';
import PersonIcon from '@mui/icons-material/Person';
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
                    {picture ? (
                        <Box
                            className={classes.profilePicture}
                            component="img"
                            src={picture}
                            alt={name}
                        />
                    ) : (
                        <Box className={classes.tempProfilePicture}>
                            <PersonIcon color="inherit" fontSize="large" />
                            <Typography color="inherit">
                                No Image
                            </Typography>
                        </Box>
                    )}
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
