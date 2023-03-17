import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import avatar from "../../assets/mix-fruits.jpg";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <div className="title">Information</div>
            <div className="item">
              <img src={avatar} alt="" className="itemImg" />

              <div className="details">
                <div className="itemTitle">Jon dev</div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <sapn className="itemValue">123@gmail.com</sapn>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <sapn className="itemValue">+1234 56789</sapn>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <sapn className="itemValue">
                    234 street, 4/A block ,istanbol
                  </sapn>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <sapn className="itemValue">Turkey</sapn>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User spending (last 6 months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
