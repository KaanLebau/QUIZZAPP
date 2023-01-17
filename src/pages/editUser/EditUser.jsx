import "./editUser.scss";
import Head from "../../components/head/Head";
import EditUserPresenter from "../../presenters/editUserPresenter/EditUserPresenter";

function EditUser(props) {
  return (
    <div>
      <Head />
      <EditUserPresenter />
    </div>
  );
}

export default EditUser;
