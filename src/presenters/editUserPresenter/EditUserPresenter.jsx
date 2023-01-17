import React, { useState } from "react";
import UserSettings from "../../views/userSettings/UserSettings";

function EditUserPresenter(props) {
  return <UserSettings currentUser={true} />;
}

export default EditUserPresenter;
