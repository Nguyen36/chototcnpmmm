import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  background-color: #0e1b1f;
  color: white;
  padding: 0 150px;
`;

const Left = styled.div`
  flex: 2;
  padding: 20px;
`;

const Logo = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  text-align: justify;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  flex: 3;
  padding: 20px;
  display: flex;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 10px;
  margin-bottom: 30px;
  color: #3a7bd5;
  margin-top: 50px;
  line-height: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  flex-wrap: wrap;
  width: 50%;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  text-decoration: none;
  color: #858585;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const Right = styled.div`
  flex: 2;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const ContactDiv = styled.span`
  height: 40px;
  width: 40px;
  background-image: linear-gradient(
    to right,
    #00d2ff 0,
    #1fa5ea 51%,
    #3a7bd5 100%
  );
  border-radius: 50%;
  color: white;
  text-align: center;
  line-height: 40px;
  margin-right: 10px;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>
          <img
            src="https://static.chotot.com/storage/default/transparent_logo.webp"
            style={{ height: "50px" }}
            alt=""
          />
        </Logo>
        <Desc>
          Chuyên trang hoạt động trao đổi hàng hoá số 1 VN <br /> <br />
          Chợ tốt luôn cam kết phục vụ với chất lượng tốt nhất dành cho khách hàng.
        </Desc>
        <SocialContainer>
          <Icon color="3B5999">
            <Facebook />
          </Icon>
          <Icon color="E4405F">
            <Instagram />
          </Icon>
          <Icon color="55ACEE">
            <Twitter />
          </Icon>
          <Icon color="E60023">
            <Pinterest />
          </Icon>
        </SocialContainer>
      </Left>
      <Center>
        <List>
          <Title>Ours Link</Title>
          <ListItem>
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginRight: "10px" }}
            />
            Home
          </ListItem>
          <ListItem>
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginRight: "10px" }}
            />
            About us
          </ListItem>
          <ListItem>
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginRight: "10px" }}
            />
            Service
          </ListItem>
          <ListItem>
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginRight: "10px" }}
            />
            Team
          </ListItem>
          <ListItem>
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginRight: "10px" }}
            />
            Blog
          </ListItem>
        </List>
        <List>
          <Title>Ours Service</Title>
          <ListItem>
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginRight: "10px" }}
            />
            Delivery Information
          </ListItem>
          <ListItem>
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginRight: "10px" }}
            />
            Customer Service
          </ListItem>
          <ListItem>
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginRight: "10px" }}
            />
            Order Tracking
          </ListItem>
          <ListItem>
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginRight: "10px" }}
            />
            Shipping & Returns
          </ListItem>
          <ListItem>
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginRight: "10px" }}
            />
            Contact Us
          </ListItem>
          <ListItem>
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginRight: "10px" }}
            />
            Careers
          </ListItem>
          <ListItem>
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginRight: "10px" }}
            />
            Payment Methods
          </ListItem>
          <ListItem>
            <FontAwesomeIcon
              icon={faAngleRight}
              style={{ marginRight: "10px" }}
            />
            Blog
          </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <ContactDiv>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
          </ContactDiv>
          Số 1, Võ Văn Ngân, Linh Chiểu
          <br />
          Thủ Đức, Thành phố Hồ Chí Minh
        </ContactItem>
        <ContactItem>
          <ContactDiv>
            <FontAwesomeIcon icon={faPhone} />
          </ContactDiv>
          1800-123-4567
        </ContactItem>
        <ContactItem>
          <ContactDiv>
            <FontAwesomeIcon icon={faEnvelope} />
          </ContactDiv>
          contact@gmail.com
          <br />
          service@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
