import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userRows, userColumns } from "../../datatablesource";
import "./datatable.scss";
import { Link } from "react-router-dom";

const Datatable = () => {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/user/test">
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTable">
      <div className="datatableTitle">
        Add new user :
        <Link to="/user/new" className="link">
          Add user
        </Link>
      </div>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        className="dataGrid"
      />
    </div>
  );
};
export default Datatable;
