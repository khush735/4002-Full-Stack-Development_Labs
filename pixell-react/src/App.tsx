import Header from "./components/Header";
import Footer from "./components/Footer";
import Department from "./components/Department";
import { departments } from "./data/departments";

const App = () => {
  return (
    <>
      <Header />

      <main>
        {departments.map((dept, index) => (
          <Department key={index} department={dept} />
        ))}
      </main>

      <Footer />
    </>
  );
};

export default App;
