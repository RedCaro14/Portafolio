import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomeScreen from './pages/HomeScreen';
import ProjectScreen from './pages/ProjectScreen';
import { ThemeProvider } from './context/ThemeContext';
import ProfileScreen from './pages/ProfileScreen';
import FloatingButtons from "./components/FloatingButtons";
function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/portfolio" element={<ProjectScreen />} />
          
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;


