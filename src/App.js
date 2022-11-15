// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import Banner from "./components/Banner/Banner";
import Intro from "./components/Introduction/Intro";
import Experience from "./components/Experience/experience";
import Education from "./components/Education/education";
import Projects from "./components/Projects/projects";
import Contact from "./components/ContactMe/contact";
import Footer from "./components/Footer/footer";
import Sidebar from "./components/Sidebar/sidebar";
function App() {
  return (
    <div>
      <div className="body-wrapper">
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <main className="main-wrapper">
          <Banner />
          <Intro />
          <Experience />
          <Education />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
