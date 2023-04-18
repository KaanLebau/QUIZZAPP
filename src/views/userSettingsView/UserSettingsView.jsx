import "./userSettings.scss";
import React, { useState } from "react";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

function UserSettingsView(props) {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(true);
  const currentUser = false;
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }
  function handleShowConfirmation() {
    setShowConfirmation(!showConfirmation);
  }

  return (
    <div className="settings">
      <div className="webapp" onClick={props.cancel} title={"To welcome page"}>
        QuizIt
      </div>
      <div className="form">
        <span className="type">User info</span>
        <div className="row">
          <div className="top">
            <div className="left">
              <label htmlFor="">{currentUser ? "Kaan" : "Name:"} </label>
            </div>
            <div className="right">
              <input
                type="text"
                id={"name"}
                title={"Name"}
                placeholder={currentUser ? "New name" : "John"}
                onChange={(e) =>
                  props.input({ id: e.target.id, value: e.target.value })
                }
              />
            </div>
          </div>
          <div className="info">
            {props.nameValidate ? (
              <CheckCircleOutlineOutlinedIcon className="iconOk" />
            ) : (
              props.err && <span>Name is required</span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="top">
            <div className="left">
              <label htmlFor="">
                {currentUser ? "Kani" : "Display name:"}{" "}
              </label>
            </div>
            <div className="right">
              <input
                type="text"
                id={"displayName"}
                title={"Display name"}
                placeholder={currentUser ? "New displayname" : "Johnny"}
                onChange={(e) =>
                  props.input({ id: e.target.id, value: e.target.value })
                }
              />
            </div>
          </div>
          <div className="info">
            {props.displayNameValidate ? (
              <CheckCircleOutlineOutlinedIcon className="iconOk" />
            ) : (
              props.err && <span>Display name is required</span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="top">
            <div className="left">
              <label htmlFor="">
                {currentUser ? "kaan@kani.com" : "Email:"}{" "}
              </label>
            </div>
            <div className="right">
              <input
                type="text"
                id={"email"}
                title={"Email"}
                placeholder={currentUser ? "New email" : "John@johnny.com"}
                onChange={(e) =>
                  props.input({ id: e.target.id, value: e.target.value })
                }
              />
            </div>
          </div>
          <div className="info">
            {props.emailValidate ? (
              <CheckCircleOutlineOutlinedIcon className="iconOk" />
            ) : (
              props.err && <span>Email is required</span>
            )}
          </div>
        </div>
        {props.currentUser && (
          <div className="row">
            <div className="top">
              <div className="left">
                <label>Current password</label>
              </div>
              <div className="right">
                <input
                  type={showPassword ? "password" : "text"}
                  id={"password"}
                  title={"password"}
                  placeholder={"*****"}
                  onChange={(e) =>
                    props.input({ id: e.target.id, value: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
        )}
        <div className="row">
          <div className="top">
            <div className="left">
              <label htmlFor="">Password: </label>
            </div>
            <div className="right">
              <input
                type={showPassword ? "password" : "text"}
                id={"password"}
                title={"password"}
                placeholder={"*****"}
                onChange={(e) =>
                  props.input({ id: e.target.id, value: e.target.value })
                }
              />
              {showPassword ? (
                <VisibilityOutlinedIcon
                  className="iconPass"
                  onClick={handleShowPassword}
                />
              ) : (
                <VisibilityOffOutlinedIcon
                  className="iconPass"
                  onClick={handleShowPassword}
                />
              )}
            </div>
          </div>
          <div className="info">
            {props.passwordValidate ? (
              <CheckCircleOutlineOutlinedIcon className="iconOk" />
            ) : (
              props.err && <span>Display name is required</span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="top">
            <div className="left">
              <label htmlFor="">Confirm Password: </label>
            </div>
            <div className="right">
              <input
                type={showConfirmation ? "password" : "text"}
                id={"passwordValidation"}
                title={"password"}
                placeholder={"*****"}
                onChange={(e) =>
                  props.input({ id: e.target.id, value: e.target.value })
                }
              />
              {showConfirmation ? (
                <VisibilityOutlinedIcon
                  className="iconPass"
                  onClick={handleShowConfirmation}
                />
              ) : (
                <VisibilityOffOutlinedIcon
                  className="iconPass"
                  onClick={handleShowConfirmation}
                />
              )}
            </div>
          </div>
          <div className="info">
            {props.confirm ? (
              <CheckCircleOutlineOutlinedIcon className="iconOk" />
            ) : (
              props.err && <span>Display name is required</span>
            )}
          </div>
        </div>

        <div className="buttons">
          {props.currentUser ? (
            <button
              title="Create"
              disabled={
                !(
                  props.nameValidate &&
                  props.displayNameValidate &&
                  props.emailValidate &&
                  props.passwordValidate &&
                  props.confirm
                )
              }
              onClick={props.create}
            >
              Update
            </button>
          ) : (
            <button
              title="Create"
              disabled={
                !(
                  props.nameValidate &&
                  props.displayNameValidate &&
                  props.emailValidate &&
                  props.passwordValidate &&
                  props.confirm
                )
              }
              onClick={props.create}
            >
              Create
            </button>
          )}
          <button onClick={props.cancel} title="Cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserSettingsView;
