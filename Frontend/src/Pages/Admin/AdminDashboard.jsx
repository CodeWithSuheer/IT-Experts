import React, { useState, useEffect } from "react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import "./AdminDashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";
import { allFormDataAsync, deleteEmailAsync } from "../../features/dataSlice";
import { useTheme } from "../../Theme/ThemeContext";
import { MdDarkMode, MdDelete, MdLightMode } from "react-icons/md";
import { CSVLink } from "react-csv";
import { Modal, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const { isDarkTheme, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [selectedMessage, setSelectedMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDelete = (userId) => {
    console.log(userId);
    dispatch(deleteEmailAsync(userId)).then((response) => {
      if (response.payload.message === "Contact deleted successfully") {
        dispatch(allFormDataAsync());
      } else {
        toast.error("Failed to delete contact");
      }
    });
  };

  useEffect(() => {
    dispatch(allFormDataAsync());
  }, [dispatch]);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const data = useSelector((state) => state.formdata.data);
  console.log("data", data);
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(clearUser());
    navigate("/");
  };
  // const handleStartDateChange = (date) => {
  //   setStartDate(date);
  // };

  // const handleEndDateChange = (date) => {
  //   setEndDate(date);
  // };

  // const handleDateRangeChange = () => {
  //   const filteredDataByDate = data.filter((rowData) => {
  //     const productDate = new Date(rowData.createdAt);
  //     return startDate && endDate
  //       ? productDate >= startDate && productDate <= endDate
  //       : true; // If no date range is selected, consider all dates
  //   });
  //   return filteredDataByDate;
  // };

  const filteredData = data.filter((rowData) => {
    const isNameMatch = rowData.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const isEmailMatch = rowData.email
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    // const isDateInRange = handleDateRangeChange().includes(rowData);

    // Return true if either name or email matches and date is in range
    return isNameMatch || isEmailMatch;
  });
  // Calculate the indexes for displaying the current page of data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Change items per page
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page when changing items per page
  };
  const handleExportCSV = () => {
    const csvData = data.map((rowData) => ({
      ID: rowData.id,
      Name: rowData.name,
      Email: rowData.email,
      "Phone Number": rowData.phone,
      Company: rowData.company,
      Message: rowData.message,
    }));

    const csvHeaders = [
      { label: "ID", key: "ID" },
      { label: "Name", key: "Name" },
      { label: "Email", key: "Email" },
      { label: "Phone Number", key: "Phone Number" },
      { label: "Company", key: "Company" },
      { label: "Message", key: "Message" },
    ];

    return (
      <CSVLink
        data={csvData}
        headers={csvHeaders}
        filename={"exported_data.csv"}
      >
        <Button
          className="button-hover-effect mb-2"
          style={{
            backgroundColor: "#f11900",
            border: "none",
            padding: ".6rem 1.5rem",
          }}
        >
          Export Csv
        </Button>
      </CSVLink>
    );
  };

  const truncateText = (text, wordsCount) => {
    const words = text.split(" ");
    const truncatedText = words.slice(0, wordsCount).join(" ");
    return truncatedText;
  };

  const handleViewMessage = (message) => {
    Swal.fire({
      title: "Full Message",
      html: message,
      showCloseButton: true,
      showConfirmButton: false,
    });
  };

  return (
    <>
      <section>
        <div className="dashboard">
          <div className="dashboard_header px-4">
            <div className="dashboard_header_heading">
              <h3>Admin Dashboard</h3>
            </div>
            <div
              onClick={handleLogout}
              className="logout_button"
              style={{ cursor: "pointer" }}
            >
              <span className="logout_text me-2">Logout</span>
              <RiLogoutBoxRLine className="logout_icon" />
            </div>
          </div>
          <div className="dashboard_body">
            <p className="dashboard_body_title py-3">
              View and manage the list of emails received from customers and
              clients.
            </p>
            <div className="emails">
              <div className="row justify-content-between ">
                <div className="col-lg-3 col-md-5 col-sm-6">
                  <input
                    type="text"
                    placeholder="Search by Email and Name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control"
                  />
                </div>

                {/* <div className="col-lg-3">
                  <label>Start Date:</label>
                  <DatePicker
                    selected={startDate}
                    onChange={handleStartDateChange}
                    className="form-control"
                    dateFormat="yyyy-MM-dd"
                  />
                </div>

                <div className="col-lg-3">
                  <label>End Date:</label>
                  <DatePicker
                    selected={endDate}
                    onChange={handleEndDateChange}
                    className="form-control"
                    dateFormat="yyyy-MM-dd"
                  />
                </div> */}

                <div className="col-lg-2">{handleExportCSV()}</div>
              </div>
              <div className="table-responsive">
                <table className={"table table-hover table-sm table-light"}>
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Ref Number</th>
                      <th scope="col">Company</th>
                      <th scope="col">Message</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  {currentData && currentData.length > 0 ? (
                    <tbody className="table-group-divider">
                      {currentData.map((rowData, index) => (
                        <tr key={index}>
                          <th>
                            {index + 1 + (currentPage - 1) * itemsPerPage}
                          </th>
                          <td>{rowData.name}</td>
                          <td
                            style={{
                              cursor: "pointer",
                              textDecoration: "underline",
                              color: "blue",
                            }}
                            onClick={() =>
                              (window.location.href = `mailto:${rowData.email}`)
                            }
                          >
                            {rowData.email}
                          </td>
                          <td>{rowData.phone}</td>
                          <td>{rowData.refNumber}</td>
                          <td>{rowData.company}</td>
                          <td>{truncateText(rowData.message, 3)}</td>

                          <td className="d-flex ">
                            <Button
                              style={{
                                backgroundColor: "#e7e7e7",
                                color: "black",
                                fontWeight: "500",
                                border: "none",
                              }}
                              onClick={() => handleViewMessage(rowData.message)}
                            >
                              View Message
                            </Button>

                            <Button
                              className="ms-2"
                              variant="danger"
                              onClick={() => handleDelete(rowData._id)}
                            >
                              <MdDelete />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    <tbody>
                      <tr>
                        <td colSpan="6">No data available</td>
                      </tr>
                    </tbody>
                  )}
                </table>
              </div>

              <div className="row justify-content-center align-items-center">
                <div className="col-lg-2 col-md-6  col-sm-2 mt-4">
                  {filteredData.length > itemsPerPage && (
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li
                          className={`page-item cursor_pointer ${
                            currentPage === 1 ? "disabled" : ""
                          }`}
                        >
                          <span
                            className="page-link"
                            onClick={() => handlePageChange(currentPage - 1)}
                            style={{ color: "black" }}
                          >
                            &laquo;
                          </span>
                        </li>
                        {[
                          ...Array(
                            Math.ceil(filteredData.length / itemsPerPage)
                          ),
                        ].map((_, index) => (
                          <li
                            key={index + 1}
                            className={`page-item cursor_pointer ${
                              index + 1 === currentPage ? "active" : ""
                            }`}
                          >
                            <span
                              className="page-link"
                              onClick={() => handlePageChange(index + 1)}
                              style={{ color: isDarkTheme ? "black" : "black" }}
                            >
                              {index + 1}
                            </span>
                          </li>
                        ))}
                        <li
                          className={`page-item cursor_pointer ${
                            currentPage ===
                            Math.ceil(filteredData.length / itemsPerPage)
                              ? "disabled"
                              : ""
                          }`}
                        >
                          <span
                            className="page-link"
                            style={{ color: "black" }}
                            onClick={() => handlePageChange(currentPage + 1)}
                          >
                            &raquo;
                          </span>
                        </li>
                      </ul>
                    </nav>
                  )}
                </div>
                <div
                  className="col-lg-1 mt-1"
                  style={{ marginTop: "-1.15rem" }}
                >
                  <p style={{ fontSize: ".9rem", marginBottom: "-1px" }}>
                    Rows per Page:
                  </p>
                  <select
                    id="itemsPerPage"
                    className="form-select  select-dropdown"
                    value={itemsPerPage}
                    onChange={handleItemsPerPageChange}
                  >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                  </select>
                </div>
              </div>
              <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Full Message</Modal.Title>
                </Modal.Header>
                <Modal.Body>{selectedMessage}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleModalClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
