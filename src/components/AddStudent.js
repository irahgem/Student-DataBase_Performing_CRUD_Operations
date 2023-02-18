import React, {useState, useEffect} from 'react'
import "./AddStudent.css"
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './assets/logo.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {IoMdPersonAdd} from 'react-icons/io'
import {MdManageAccounts} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import { Link} from 'react-router-dom';

function AddStudent() {
    // const location = useLocation();
    const [dateTime, setDateTime] = useState(new Date());
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
        const intervalId = setInterval(() => {
          setDateTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    // const [id, setId] = useState(1);
    const navigate = useNavigate();

    const [managebuttonisActive, setmanagebuttonIsActive] = useState(false);
    const [LogoutbuttonisActive, setLogoutbuttonIsActive] = useState(false);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try 
        {
            if(!details.firstName || !details.lastName || !details.classnum || !details.division || !details.rollNumber || !details.address1 || !details.address2 || !details.landmark || !details.city || !details.pincode ) {
                alert("Kindly fill up all details.");
                window.location.reload(false);
            }

            const{firstName,middleName,lastName,classnum,division,rollNumber,address1,address2,landmark,city,pincode}=details;
            const res = await fetch("https://vocal-booth-322506-default-rtdb.firebaseio.com/studentform.json",
            {
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    firstName,
                    middleName,
                    lastName,
                    classnum,
                    division,
                    rollNumber,
                    address1,
                    address2,
                    landmark,
                    city,
                    pincode,
                })
            })
            setTimeout(() => navigate('/ManageStudent'), 500);
            alert('Student Added Successfully');

        } catch (error) {
            console.error(error);
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

                    <a href="" className='buttonstyle' >
                        <Container style={{ backgroundColor: 'red', WebkitTextFillColor: 'white' }}>
                            <Row>
                                <Col xs={2}>
                                    <IoMdPersonAdd />
                                </Col>
                                <Col xs={7}>
                                    <p align="Left">
                                        <Link to="/AddStudent" className='change'>Add Student</Link>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </a>
                    
                    <a href='' className='buttonstyle' onClick={() => setmanagebuttonIsActive(!managebuttonisActive)}>
                        <Container>
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
                    
                    <a href='' className='buttonstyle' onClick={() => setLogoutbuttonIsActive(!LogoutbuttonisActive)}>
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
                            <form onSubmit={handleSubmit} className='ChangeBorder'>
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
                                    <button className='addbuttonstyle' onClick={handleSubmit}>Add Student</button>
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

export default AddStudent
