import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import { useParams } from "react-router-dom";
import models from "../../modelData/models";
import { Link } from "react-router-dom";
/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const user = useParams();
  const userPhotos = models.photoOfUserModel(user.userId);
  const userPhotosJsx = [];

  if (userPhotos.length === 0) {
    userPhotosJsx.push(
      <div key={-10000}>This user has not uploaded any photos.</div>,
    );
  } else {
    for (let i = 0; i < userPhotos.length; i++) {
      const imageSource = "/images/" + userPhotos[i].file_name;
      const imageDateTime = userPhotos[i].date_time;
      const imageComments = [];

      if (
        userPhotos[i].comments !== undefined &&
        userPhotos[i].comments.length !== 0
      ) {
        for (let j = 0; j < userPhotos[i].comments.length; j++) {
          imageComments.push(
            <span key={8 * j}>
              <b>Comment</b>: {userPhotos[i].comments[j].comment}
            </span>,
          );
          imageComments.push(<br key={8 * j + 1} />);
          imageComments.push(
            <span key={8 * j + 2}>
              Date and time of this comment:{" "}
              {userPhotos[i].comments[j].date_time}
            </span>,
          );
          imageComments.push(<br key={8 * j + 3} />);
          const linkToUser = `/users/${userPhotos[i].comments[j].user._id}`;
          imageComments.push(
            <span key={8 * j + 4}>
              Name of the user who created this comment:
              <Link key={8 * j + 5} to={linkToUser}>
                {userPhotos[i].comments[j].user.first_name +
                  " " +
                  userPhotos[i].comments[j].user.last_name}
              </Link>
            </span>,
          );
        }
      } else {
        let k = 0;
        imageComments.push(
          <span key={-3 * k - 1}>
            This photo has no corresponding comments.
          </span>,
        );
        k++;
      }

      userPhotosJsx.push(
        <div key={10000 + 1 * i}>
          <img src={imageSource} width="300" height="200" alt="" />
          <div>
            Date and time of photo creation: {imageDateTime} &nbsp;&nbsp;
            <br />
            <b>The comments of this photo are listed below:</b>
            <div>{imageComments}</div>
          </div>
        </div>,
      );
    }
  }
  return (
    <div className="photos-container">
      <Typography variant="body1">
        This should be the UserPhotos view of the PhotoShare app. Since it is
        invoked from React Router the params from the route will be in property
        match. So this should show details of user:
        {user.userId}. You can fetch the model for the user from
        models.photoOfUserModel(userId):
      </Typography>
      {userPhotosJsx};
    </div>
  );
}

export default UserPhotos;
