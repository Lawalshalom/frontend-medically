import styled from 'styled-components';
import { Button } from 'antd';
import { useHistory } from 'react-router';


const Wrapper = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;

  h3{
    margin-bottom: 150px;
  }
`;

const Dashboard = () => {
  const history = useHistory();

  const logout = () => history.replace('/login');

  return (
    <Wrapper>
      <div>
        <h3 className="text-primary text-bolder">Welcome to the Medicaly Dashboard</h3>
        <p className="text-center mt-4">
          <Button className="bg-primary" type="primary" onClick={logout}>Logout</Button>
        </p>
      </div>
    </Wrapper>
  )
}

export default Dashboard;
