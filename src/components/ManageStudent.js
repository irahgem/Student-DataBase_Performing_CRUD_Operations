import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Row, Col, Table, Card } from 'react-bootstrap';
import logo from './assets/logo.png'
import {IoMdPersonAdd} from 'react-icons/io'
import {MdManageAccounts} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import { Link} from 'react-router-dom';

function ManageStudent() {
    const [studentData, setStudentData] = useState([]);
    const navigate = useNavigate();
    const [selectedStudent, setSelectedStudent] = useState({});

    useEffect(() => {
        async function fetchData() {
          try {
            const response = await fetch(
              'https://vocal-booth-322506-default-rtdb.firebaseio.com/studentform.json'
            );
            console.log(response)
            const data = await response.json();
            console.log("data",data)
            setStudentData(Object.values(data));
          } catch (error) {
            console.error(error);
          }
        }
        fetchData();
    }, []);

    const handleEdit = (student) => {
      navigate(`/Update`, {state: {selectedStudent: student}});
    };
  
    const handleView = (student) => {
      setSelectedStudent(student);
    };

    const handleDelete = async (rollNumber) => {
        try {
          const response = await fetch(
            `https://vocal-booth-322506-default-rtdb.firebaseio.com/studentform.json`
          );
          const data = await response.json();
          const recordId = Object.keys(data).find(
            (id) => data[id].rollNumber === rollNumber
          );
          if (!recordId) {
            throw new Error(`Record with roll number ${rollNumber} not found`);
          }
          await fetch(
            `https://vocal-booth-322506-default-rtdb.firebaseio.com/studentform/${recordId}.json`,
            {
              method: 'DELETE',
            }
          );
          const updatedData = studentData.filter(
            (student) => student.rollNumber !== rollNumber
          );
          setStudentData(updatedData);
          alert("Successfully student record deleted");
          window.location.reload(false);
        } catch (error) {
          console.error(error);
          alert("An error occurred while deleting the record. Please try again.");
          window.location.reload(false);
        }
    };

  return (
    <div className='Frame31'>
      <Navbar> 
            <Container>
                <Navbar.Brand href="#home">
                    <img 
                    src={logo}
                    width="50"
                    height="50"
                    
                    className="d-inline-block align-left"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
        <br />

        <Container>
            <Row>
                <Col xs={2}>

                    <a href="" className='buttonstyle'>
                        <Container>
                            <Row>
                                <Col xs={2}>
                                    <IoMdPersonAdd />
                                </Col>
                                <Col xs={8}>
                                    <p align="Left">
                                        <Link to="/AddStudent" className='change'>Add Student</Link>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </a>

                    <a href='' className='buttonstyle'>
                        <Container style={{ backgroundColor: 'red', WebkitTextFillColor: 'white' }}>
                            <Row>
                                <Col xs={2}>
                                    <MdManageAccounts />
                                </Col>
                                <Col xs={9}>
                                    <p align='left'>
                                        <Link to="/ManageStudent" className='change'>Manage Students</Link>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </a>

                    <a href='' className='buttonstyle'>
                        <Container>
                            <Row>
                                <Col xs={2}>
                                    <FiLogOut />
                                </Col>
                                <Col xs={6}>
                                    <p align="left">
                                        <Link to="/Logout" className='change'>Logout</Link>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </a> 

                </Col>

                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Class Number</th>
                                <th>Division</th>
                                <th>Roll Number</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                          {studentData.map((student, index) => (
                            <tr key={index}>
                              <td>{student.firstName}</td>
                              <td>{student.classnum}</td>
                              <td>{student.division}</td>
                              <td>{student.rollNumber}</td>
                              <td>
                                <button onClick={() => handleView(student)}>View</button>
                                <button onClick={() => handleEdit(student)}>Edit</button>
                                <button onClick={() => handleDelete(student.rollNumber)}>Delete</button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                    </Table>
                    
                    <Row>
                        <Col>
                            {selectedStudent.firstName && (
                                <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Title>{selectedStudent.firstName} {selectedStudent.middleName} {selectedStudent.lastName}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Class: {selectedStudent.classnum}-{selectedStudent.division}</Card.Subtitle>
                                        <Card.Text>Roll Number: {selectedStudent.rollNumber}</Card.Text>
                                        <Card.Text>Address: {selectedStudent.address1}, {selectedStudent.address2}</Card.Text>
                                        <Card.Text>Landmark: {selectedStudent.landmark}</Card.Text>
                                        <Card.Text>City: {selectedStudent.city}</Card.Text>
                                        <Card.Text>Pincode: {selectedStudent.pincode}</Card.Text>
                                    </Card.Body>
                                </Card>
                            )}
                        </Col>
                    </Row>

                </Col>
            </Row>

        </Container>

    </div>
  )
}

export default ManageStudent
