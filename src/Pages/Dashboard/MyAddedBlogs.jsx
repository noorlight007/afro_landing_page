import { Link } from "react-router-dom";
import Heading from "../../Components/Shared/Reusable/Heading";
import BtnWithIcon from "../../Buttons/BtnWithIcon";

const MyAddedBlogs = () => {
  return (
    <>
      <div className=" ">
        <Heading title={"My Added Blogs"}></Heading>

        <div className="flex justify-end mb-10">
          <Link to="/fqz/admin/panel/createBlogs">
            <BtnWithIcon
              text="Create New Blog"
              className="bg-accent text-white"
            ></BtnWithIcon>
          </Link>
        </div>
        {/* content table  */}
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Category</th>
                <th>Date Created</th>
                <th>Author</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Eum corrupti evenie</td>
                <td>QMollit sed amet qui</td>
                <td>12/16/2020</td>
                <td>Et ea quia ab esse v</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyAddedBlogs;
