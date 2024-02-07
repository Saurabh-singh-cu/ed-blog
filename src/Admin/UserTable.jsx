// import React, { useEffect, useState } from "react";
// import "./Users.css";
// import Header from "../components/Header";
// import Navbar from "../components/Navbar";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";

// const UserTable = () => {
//   const [users, setUsers] = useState([]);

//   const fetchUserResponse = async () => {
//     try {
//       const fetchApi = await fetch("http://172.17.18.255:8080/text-post/all/");
//       const response = await fetchApi.json();
//       console.log(response, "RESPONSE USERS");
//       setUsers(response);
//     } catch (error) {
//       console.error("Error fetching user response:", error);
//     }
//   };

//   useEffect(() => {
//     fetchUserResponse();
//   }, []);

//   return (
//     <div>
//       <Header />
//       <Navbar />

//       <div style={{ marginTop: "50px" }} class="main-table-containter">
//         <div class="title-table-container">
//           <div class="subtitle">User Responses</div>
//           <button class="select-button"> Recent </button>
//         </div>
//         <div>
//           <table>
//             <tbody>
//               <tr>
//                 <th>S.No</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Mesaage</th>
//                 <th>Reply</th>
//               </tr>
//               {users &&
//                 users.map((item, id) => (
//                   <>
//                     <tr key={id}>
//                       <td>01</td>
//                       <td>{item?.title}</td>
//                       <td> {item?.email}</td>
//                       <td>{item?.content}</td>

//                       <td>
//                         <div class="pendiente">Send Mail</div>
//                       </td>
//                     </tr>
//                   </>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserTable;

import React, { useEffect, useState } from "react";
import "./Users.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const fetchUserResponse = async () => {
    try {
      const fetchApi = await fetch("https://apiedportfolio.unicornfortunes.com/text-post/all/");
      const response = await fetchApi.json();
      console.log(response, "RESPONSE USERS");
      setUsers(response);
    } catch (error) {
      console.error("Error fetching user response:", error);
    }
  };

  useEffect(() => {
    fetchUserResponse();
  }, []);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedUsers(selectAll ? [] : users);
  };

  const handleSendMail = () => {
    // Implement your email sending logic here for selectedUsers
    // For demonstration purposes, you can log the selected users' email addresses
    console.log("Sending email to:", selectedUsers.map(user => user.email));
  };

  return (
    <div>
      <Header />
      <Navbar />

      <div style={{width:"100vw", display:"flex", justifyContent:"center", }}>

      

      <div style={{ marginTop: "50px", width:"87vw" , backgroundColor:"#c7c7c7", borderRadius:"10px"  }} className="main-table-container">
        <div className="title-table-container">
          <div className="subtitle">User Responses</div>
          <button className="select-button" onClick={toggleSelectAll}>
            {selectAll ? "Deselect All" : "Select All"}
          </button>
          <button className="select-button" onClick={handleSendMail}>
            Send Mail
          </button>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mesaage</th>
                <th>Reply</th>
              </tr>
              {users &&
                users.map((item, id) => (
                  <tr key={id}>
                    <td>01</td>
                    <td>{item?.title}</td>
                    <td> {item?.email}</td>
                    <td className="message-cell" title={item?.content}>{item?.content.slice(0, 40)}....</td>
                    <td>
                      <div
                        className={`pendiente ${
                          selectedUsers.includes(item) ? "selected" : ""
                        }`}
                        onClick={() =>
                          setSelectedUsers((prev) =>
                            prev.includes(item)
                              ? prev.filter((user) => user !== item)
                              : [...prev, item]
                          )
                        }
                      >
                        {selectedUsers.includes(item) ? "Selected" : "Select"}
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>

  );
};

export default UserTable;
