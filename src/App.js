import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App({handleOpenLogin}) {
  return (
    <div className="App">
      <Header props={handleOpenLogin}/>
      <ListarTarefa />
  </div>
  );
}

export default App;
