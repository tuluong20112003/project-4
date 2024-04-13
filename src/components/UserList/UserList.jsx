import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";
import { Link } from "react-router-dom";
function UserList() {
  const users = models.userListModel();
  return (
    <div>
      <List component="nav">
        {users.map((item, index) => (
          <>
            <ListItem>
              <Link to={`/users/${item._id}`}>
                <ListItemText primary={item.first_name} />
              </Link>
            </ListItem>
            <Divider />
          </>
        ))}
      </List>
    </div>
  );
}

export default UserList;
