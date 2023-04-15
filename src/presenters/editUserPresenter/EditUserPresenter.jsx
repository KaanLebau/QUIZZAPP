import React, { useState } from "react";
import UserSettings from "../../views/userSettingsView/UserSettingsView";

function EditUserPresenter(props) {
  return <UserSettings currentUser={true} />;
}

export default EditUserPresenter;
