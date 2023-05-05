import "./editUser.scss";
import EditUserPresenter from "../../presenters/editUserPresenter/EditUserPresenter";
import HeadPresenter from "../../presenters/headPresenter/HeadPresenter";

function EditUser(props) {
  return (
    <div>
      <HeadPresenter />
      <EditUserPresenter />
    </div>
  );
}

export default EditUser;
