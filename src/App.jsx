import { BrowserRouter, Routes, Route } from "react-router";
import Post from "./pages/PostsList";
import DefaultLayout from "./pages/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
