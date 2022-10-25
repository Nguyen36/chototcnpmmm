import "./new.scss";

import styled from "styled-components";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, get1 } from "../../redux/apiRequest";
import { Tabs, Tab, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLockOpen,
  faKey,
  faLock,
  faUser,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Button = styled.button`
  padding: 10px 25px;
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    #00d2ff 0,
    #1fa5ea 50%,
    #3a7bd5 100%
  );
  border: 1px solid transparent;
  text-transform: uppercase;
  margin-top: 20px;
`;

const ContactItem = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactDiv = styled.span`
  height: 40px;
  width: 40px;
  border: 1px solid #3a7bd5;
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 40px;
  margin-right: 10px;
`;

const Detail = styled.div``;

const Form = styled.div`
  text-align: center;
`;

const Label = styled.label`
  width: 150px;
  text-align: center;
`;

const Input = styled.input`
  width: 300px;
`;

const New = ({ title, action }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.login?.currentUser);

  const [file, setFile] = useState(user?.image);

  const [username, setUsername] = useState(user?.username);
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [currentPassword, setcurrentPassword] = useState("");
  const [email, setEmail] = useState(user?.email);
  const [phone, setPhone] = useState(user?.phone);
  const [fullname, setFullname] = useState(user?.fullname);
  const [role, setRole] = useState(user?.role);
  const { id } = useParams();

  const handleChangeProfile = (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      password: password,
      email,
      phone,
      fullname,
      role,
    };
    editUser(newUser, dispatch, navigate, id, user?.accessToken);
  };

  const handleChangePass = (e) => {
    e.preventDefault();

    const newUser = {
      password: password,
    };
    editUser(newUser, dispatch, navigate, id, user?.accessToken);
  };
  return (
    <div className="new">
      <div className="newContainer">
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3"
        >
          <Tab eventKey="changePassword" title="Change Password">
            <Form onSubmit={handleChangePass}>
              <ContactItem className="formInput">
                <ContactDiv>
                  <FontAwesomeIcon
                    icon={faLockOpen}
                    style={{ color: "#3a7bd5" }}
                  />
                </ContactDiv>
                <Label>Current Password</Label>
                <Input
                  type="password"
                  onChange={(e) => setcurrentPassword(e.target.value)}
                />
              </ContactItem>

              <ContactItem className="formInput">
                <ContactDiv>
                  <FontAwesomeIcon icon={faLock} style={{ color: "#3a7bd5" }} />
                </ContactDiv>
                <Label>Password</Label>
                <Input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </ContactItem>

              <ContactItem className="formInput">
                <ContactDiv>
                  <FontAwesomeIcon icon={faKey} style={{ color: "#3a7bd5" }} />
                </ContactDiv>
                <Label>Confirm Password</Label>
                <Input
                  type="password"
                  onChange={(e) => setconfirmPassword(e.target.value)}
                />
              </ContactItem>

              <Button type="submit">Change</Button>
            </Form>
          </Tab>
          <Tab eventKey="changeAvatar" title="Change Avatar">
            <Form>
              <div className="left">
                <img
                  src={`${user?.image}`}
                  alt=""
                  style={{ width: "auto", height: "200px", marginTop: "10px" }}
                />
              </div>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              <Button type="submit">Change</Button>
            </Form>
          </Tab>
          <Tab eventKey="personalInfo" title="Personal Info">
            <Form onSubmit={handleChangeProfile}>
              <ContactItem>
                <ContactDiv>
                  <FontAwesomeIcon icon={faUser} style={{ color: "#3a7bd5" }} />
                </ContactDiv>
                <Label>Full Name</Label>
                <Input
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </ContactItem>

              <ContactItem>
                <ContactDiv>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#3a7bd5" }}
                  />
                </ContactDiv>
                <Label>Email</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </ContactItem>

              <ContactItem>
                <ContactDiv>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#3a7bd5" }}
                  />
                </ContactDiv>
                <Label>Phone</Label>
                <Input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </ContactItem>

              <Button type="submit">Change</Button>
            </Form>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default New;