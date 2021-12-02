import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/Theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./ui/Footer";
import Home from "./ui/Home";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue()}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex()}
        />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/services" element={<Header />} />
          <Route path="/revolution" element={<Header />} />
          <Route path="/about" element={<Header />} />
          <Route path="/contact" element={<Header />} />
          <Route path="/estimate" element={<Header />} />
          <Route path="/customsoftware" element={<Header />} />
          <Route path="/mobileapps" element={<Header />} />
          <Route path="/websites" element={<Header />} />
        </Routes>
        <Footer
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
