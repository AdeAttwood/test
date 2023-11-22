import "./App.css";

function App() {
  const { all } = useSelector((store) => store.users);

  return (
    <>
      <table>
        <thead>
          <th>
            <th>ID</th>
            <th>NAME</th>
          </th>
        </thead>
        <tbody>{/* Code HERE */}</tbody>
      </table>
    </>
  );
}

export default App;
