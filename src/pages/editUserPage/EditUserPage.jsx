import "./editUser.scss";
import EditUserPresenter from "../../presenters/editUserPresenter/EditUserPresenter";
import HeadPresenter from "../../presenters/headPresenter/HeadPresenter";

function EditUserPage(props) {
  return (
    <div>
      <HeadPresenter />
      <EditUserPresenter />
    </div>
  );
}

export default EditUserPage;
