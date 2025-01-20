import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from "./pages/home";
import Container from "./components/Container";
import Favourite from "./pages/favourite";
import { FavouriteCatsProvider } from "./providers/favouriteCatsProvier";
import { AllCatsProvider } from "./providers/allCatsProvider";

function App() {
  return (
    <div className="h-full">
      <Header />
      <main className="h-full py-4 md:py-6 lg:py-8 ">
        <Container>
          <AllCatsProvider>
            <FavouriteCatsProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favourite" element={<Favourite />} />
              </Routes>
            </FavouriteCatsProvider>
          </AllCatsProvider>
        </Container>
      </main>
    </div>
  );
}

export default App;
