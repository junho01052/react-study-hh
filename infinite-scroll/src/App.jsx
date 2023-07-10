import ItemList from "./components/ItemList";
import { styled } from "styled-components";


const App = () => {
  return (
    <StApp>
      <section>
        <div>
          <div>
            <StHeader>
              <h1>‣ LATEST POSTS</h1>
              <button>Change View</button>
            </StHeader>
          </div>
          <div>
            <ItemList />
          </div>
        </div>
      </section>
    </StApp>
  );
};

export default App;

const StHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  button {
    height: 50px;
  }
`;

const StApp = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
