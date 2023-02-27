import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMAGE_API } from "../../constants/main";
import { ApiService } from "../../services/ApiService";

export default function UserDetail() {
  const { id } = useParams();
  const [profile, setProfile] = useState();


  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const res = await ApiService.fetchUserById(id)
        setProfile(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserProfile()
  }, [id]);


  return (
    <>
      <Container className="user-details">
        <Grid marginTop={2} container spacing={2}>
          <Grid item xs={12} md={5}>
            <Avatar
              alt="Remy Sharp"
              variant="circular"
              src={IMAGE_API + profile?.username + ".svg?options[mood][]=happy"}
              sx={{ width: 250, height: 250 }}
            />
            <Typography className="font-sm" variant="h4" marginY={3}>
              {profile?.company.catchPhrase}
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box variant='div' marginTop={2}>
              <Typography fontWeight='bold' variant='h3' component='h3'>
                {profile?.name}
              </Typography>
              <Typography variant='h4' marginY={3}>
                Goes by the name "{profile?.username}"
              </Typography>
              <Typography fontWeight='bold' variant='h3' component='h3'>
                Address
              </Typography>

              <Typography marginY={3} variant='h4'>
                {profile?.address.street} {profile?.address.suite}
              </Typography>
              <Typography marginY={3} variant='h4'>
                {profile?.address.zipcode} {profile?.address.city}
              </Typography>
              <Typography fontWeight='bold' variant='h4' component='h4'>
                Details
              </Typography>
              <Typography variant='h4' marginY={3}>
                Website: {profile?.website}
              </Typography>
              <Typography variant='h4' marginY={3}>
                Phone: {profile?.phone}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
