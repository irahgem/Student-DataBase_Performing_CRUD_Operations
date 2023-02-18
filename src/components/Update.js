import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import logo from './assets/logo.png'

function Update() {
    // const location = useLocation();
    const [dateTime, setDateTime] = useState(new Date());
    const [studentData, setStudentData] = useState([]);


    const [details, setDetails] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        classnum: '',
        division: '',
        rollNumber: '',
        address1: '',
        address2: '',
        landmark: '',
        city: '',
        pincode: '',
    })

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
        const intervalId = setInterval(() => {
          setDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const navigate = useNavigate();
    
    const handleUpdate = async (rollNumber, updates) => {
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
              method: 'PATCH',
              body: JSON.stringify(updates),
            }
          );
          const updatedData = studentData.map((student) => {
            if (student.rollNumber === rollNumber) {
              return { ...student, ...updates };
            }
            return student;
          });
          setStudentData(updatedData);
          navigate("/ManageStudent");
        } catch (error) {
          console.error(error);
          alert("An error occurred while updating the record. Please try again.");
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

                </Col>
                
                <Col>                
                    <div className='Frame53'>
                        <div className='Frame39'>
                            <div className='Addstudentdiv'>Add Student</div>
                            <div className='Date'>
                                {/* <p className='dateset'>{dateTime.toLocaleString()}</p> */}
                                <p>
                                    {dateTime.getDate()}{" "}
                                    {dateTime.toLocaleString("default", { month: "short" })}{" "}
                                    {dateTime.getFullYear()} {dateTime.getHours()}:
                                    {dateTime.getMinutes().toString().padStart(2, "0")}
                                </p>
                            </div>
                        </div>
                        <div className='Frame183'>
                            <form onSubmit={handleUpdate} className='ChangeBorder'>
                                <div className='Frame184'>
                                    <div className='Frame74'>
                                        <div className='Frame68'>
                                            <input className='Changeaddress'
                                                type="text"
                                                placeholder="First Name"
                                                border='None'
                                                onChange={(event) => setDetails({...details,firstName:event.target.value})}
                                            />
                                        </div>
                                        <div className='Frame69'>
                                            <input className='Changeaddress'
                                                type="text"
                                                placeholder="Middle Name"
                                                onChange={(event) => setDetails({...details,middleName:event.target.value})}
                                            />
                                        </div>
                                        <div className='Frame70'>
                                            <input className='Changeaddress'
                                                
                                                type="text"
                                                placeholder="Last Name"
                                                onChange={(event) => setDetails({...details,lastName:event.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className='Frame180'>
                                        <div className='Frame68'>
                                            <select  
                                            className='Changeaddress' 
                                            onChange={(event) => setDetails({...details, classnum:event.target.value})}
                                            >
                                                <option value="">Select Class</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                        </div>
                                        <div className='Frame69'>
                                            <select 
                                            className='Changeaddress' 
                                            onChange={(event) => setDetails({...details,division:event.target.value})}
                                            >
                                                <option value="">Select Division</option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                                <option value="E">E</option>
                                            </select>
                                        </div>
                                        <div className='Frame70'>
                                            <input className='Changeaddress'
                                                type="number"
                                                placeholder="Enter Roll Number in Digits"
                                                onChange={(event) => setDetails({...details,rollNumber:event.target.value})}
                                                
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className='Frame185'>
                                    <div className='Frame181'>
                                        <div className='Frame68'>
                                            <textarea className='Changeaddress'
                                                placeholder="Address Line 1"
                                                onChange={(event) => setDetails({...details,address1:event.target.value})}
                                            />
                                        </div>
                                        <div className='Frame69'>
                                            <textarea className='Changeaddress'
                                                placeholder="Address Line 2"
                                                onChange={(event) => setDetails({...details,address2:event.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className='Frame182'>
                                        <div className='Frame68'>
                                            <input className='Changeaddress'
                                                type="text"
                                                placeholder="Landmark"
                                                onChange={(event) => setDetails({...details,landmark:event.target.value})}
                                            />
                                        </div>
                                        <div className='Frame69'>
                                            <input className='Changeaddress'
                                                type="text"
                                                placeholder="City"
                                                onChange={(event) => setDetails({...details,city:event.target.value})}
                                            />
                                        </div>
                                        <div className='Frame70'>
                                            <input className='Changeaddress'
                                                type="number"
                                                placeholder="Pincode"
                                                onChange={(event) => setDetails({...details,pincode:event.target.value})}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        
                        <div className='Frame177'>
                            <div className='Frame174'>
                                <div className='Text'>
                                    <button className='addbuttonstyle' onClick={handleUpdate}>Update</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Update
