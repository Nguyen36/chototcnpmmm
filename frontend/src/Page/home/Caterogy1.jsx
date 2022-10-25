import styled from "styled-components";

import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";
import Newsletter from "../../Components/Home/Newsletter";
import CaterogyProducts1 from "../../Components/Home/CategoryProducts1";

const Container = styled.div`
  padding: 80px 150px 0;
`;

const Title = styled.h1`
  margin-top: 10px;
  font-size: 50px;
  color: #3a7bd5;
  font-weight: bold;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const Caterogy1 = () => {
  return (
    <div>
      <Navbar />
      <Container>
        <Title>Xe số</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Container>
      <CaterogyProducts1 />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Caterogy1;
