import Main from "./components/Main";
import CategoryList from "./components/CategoryList";
import Noticias from "./components/Noticias";
import About from "./components/About";
import Doubts from "./components/Doubts";
import CardLogo from "./components/CardLogo";
import NavList from "./components/NavList";

export default function Home() {

  return (
    <>
      <Main />
      <CategoryList />
      <Noticias />
      <About />
      <Doubts />
      <NavList />
      <CardLogo />
    </>
  );
}
