import "./App.css";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useEffect } from "react";

import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/Container";
function App() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const url = "api/getAll/";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        console.log(response);
        const json = await response.json();
        setData(json);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const downloadEmployeeData = () => {
		fetch('api/download')
			.then(response => {
				response.blob().then(blob => {
					let url = window.URL.createObjectURL(blob);
					let a = document.createElement('a');
					a.href = url;
					a.download = 'employees.csv';
					a.click();
				});
				//window.location.href = response.url;
		});
	}

  return (
    <>
    <Container >
    <Button className="primary m-2 ml-20 pull-right" onClick={downloadEmployeeData}>Export to CSV</Button>
    
    <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user._id}>
              <td>{user.user_id}</td>
              <td>{user.user_name}</td>
              <td>{user.user_email}</td>
              <td>{user.user_gender}</td>
              <td>
                {user.user_status === "inactive" ? (
                  <Badge bg="danger mt-2">{user.user_status}</Badge>
                ) : (
                  <Badge bg="success mt-2">{user.user_status}</Badge>
                )}
              </td>
              <td>
                <Button variant="warning" href={`/${user._id}`}>
                  Update
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
      
    </>
  );
}

export default App;
