import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import "./new.scss";
import camera from "../../assets/camera.png";
import { useState } from "react";
const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  // console.log(file);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : camera} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  placeholder="Upload image"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" placeholder="Enter user name" />
              </div>
              <div className="formInput">
                <label>Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="text" placeholder="Enter your email" />
              </div>

              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder="Enter your phone" />
              </div>

              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder="Enter your address" />
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="text" placeholder="Enter your password" />
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder="Enter your country" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
