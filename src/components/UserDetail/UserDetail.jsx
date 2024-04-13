import React from "react";
import {Typography} from "@mui/material";

import "./styles.css";
import {useParams} from "react-router-dom";
import models from "../../modelData/models";
import { Link } from "react-router-dom";
function UserDetail() {
    const user = useParams();
    const userDetail = models.userModel(user.userId);
    console.log(userDetail);
    return (
        <>
          <Typography variant="body1">
            This should be the UserDetail view of the PhotoShare app. Since it is
            invoked from React Router the params from the route will be in property match.
            So this should show details of user: {user.userId}.
            You can fetch the model for the user from models.userModel.
          </Typography>
          <div>
        <h2>
          Details of {userDetail.first_name} {userDetail.last_name}:
        </h2>
        <div>
          <p>
            First name: {userDetail.first_name}
          </p>
          <p>
            Last name: {userDetail.last_name}
          </p>
          <p>
            User ID: {userDetail._id}
          </p>
          <p>
            Location: {userDetail.location}
          </p>
          <p>
            Description: {userDetail.description}
          </p>
          <p>
            Occupation: {userDetail.occupation}
          </p>
          <p> To see the photos and comments of this user, please click this <Link to={`/photos/${userDetail._id}`}>link</Link></p>
        </div>
      </div>
        </>
    );
}

export default UserDetail;
