import { Avatar, Box, Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  IMAGE_API,
  USER_DETAILS_ADDRESS,
  USER_DETAILS_WEBSITE,
  USER_DETAILS_PHONE,
  USER_DETAILS_MORE_DETAILS
} from '../../constants/main';
import { ApiService } from '../../services/ApiService';
import './UserDetailsLayout.scss';

export default function UserDetailsLayout() {
  const { id } = useParams();
  const [profile, setProfile] = useState();

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const res = await ApiService.fetchUserById(id);
        setProfile(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserProfile();
  }, [id]);

  return (
    <>
      <Container className="user-details">
        <div className="user-details__row-center">
          <h1 className="script">{profile?.company.catchPhrase}</h1>
        </div>
        <Grid marginTop={2} container spacing={2}>
          <Grid item xs={12} md={5}>
            <Avatar
              alt={profile?.name}
              src={IMAGE_API + profile?.username + '.svg?options[mood][]=happy'}
              sx={{ width: 250, height: 250 }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Box variant="div" marginTop={2}>
              <div className="user-details__row">
                <h2> {profile?.name}</h2>
              </div>
              <div className="user-details__row">
                <h3>
                  {' '}
                  Goes by the name <span className="script">"{profile?.username}"</span>
                </h3>
              </div>
              <div className="user-details__row">
                <strong>{USER_DETAILS_ADDRESS}</strong>
                <span>
                  {profile?.address.street} {profile?.address.suite}
                </span>
                <span>
                  {profile?.address.zipcode} {profile?.address.city}
                </span>
              </div>

              <div className="user-details__row">
                <strong>{USER_DETAILS_MORE_DETAILS}</strong>
                <span>
                  {USER_DETAILS_WEBSITE}: {profile?.website}
                </span>
                <span>
                  {USER_DETAILS_PHONE}: {profile?.phone}
                </span>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
