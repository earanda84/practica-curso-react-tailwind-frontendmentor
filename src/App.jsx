import BackgroundImg from "./components/Layout/mobile/BackgroundImg";
import Header from "./components/Layout/mobile/Header";
import TitleHeader from "./components/Layout/mobile/TitleHeader";
import FormHeader from "./components/Layout/mobile/FormHeader";
import Main from "./components/Layout/mobile/Main";
import Article from "./components/Layout/mobile/Article";
import Section from "./components/Layout/mobile/SectionMain";
import SectionItems from "./components/Layout/mobile/SectionItems";


function App() {
  return (
    <>
      <BackgroundImg>
        <Header>
          <TitleHeader />
          <FormHeader />
        </Header>
        <Main>
          {/* Articles */}
          <Article title="Finish your course of React"/>
          <Article title="Finish your course of NodeJS"/>
          <Article title="Finish your course of NextJS"/>
          <Article title="Finish your course of GO"/>
          {/* Sections */}
          <Section />
        </Main>
        <SectionItems />
        {/* Pendiente Seccion DRAG AND DROP */}
        <p className="text-center">Drag and DROP to reorder LIST</p>
      </BackgroundImg>
    </>
  )
}

export default App