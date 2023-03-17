import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import List from "../../components/table/Table";
import Widget from "../../components/widgets/Widget";
import "./home.scss";
const Home = ({ setMode, mode }) => {
  return (
    <div className="home">
      <Sidebar setMode={setMode} mode={mode} />
      <div className="homeContainer">
        <Navbar setMode={setMode} mode={mode} />
        <div className="widgets">
          <Widget type="users" />
          <Widget type="orders" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title="Last 6 months revenue" />
        </div>
        <div className="listContainer">
          <div className="listTitle">Transactions Lists</div>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
