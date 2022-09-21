import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header, MainContainer, CreateContainer } from "./components";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { useStateValue } from "./context/StateProvider";

const App = () => {
  const [{}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      console.log(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence existBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element=<CreateContainer /> />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
