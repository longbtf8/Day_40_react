import { BrowserRouter, Routes, Route } from "react-router";
import Post from "./pages/PostsList";
import DefaultLayout from "./pages/DefaultLayout";
import User from "./pages/UsersList";

function App() {
  return (
    <BrowserRouter basename="/Day_40_react/">
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<Post />} />
          <Route path="/user" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
