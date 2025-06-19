import ProjectsSideBar from "./components/ProjectsSideBar"
import NewProject from "./components/NewProject";

function App() {
  return (
    <main className="h-dvh my-8 flex gap-8">
      <ProjectsSideBar />
      <NewProject />
    </main>
  );
}

export default App;
