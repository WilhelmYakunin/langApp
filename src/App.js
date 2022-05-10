import './css/appStyles.css';
import Wrapper from './components/wrapper/Wrapper';
import Container from './components/container/Container';
import AppLink from './components/links/appLink/AppLink';
import MainTitle from './components/mainTitle/MainTitle';
import LandingDesccription from './components/description/LandingDesccription';
import IstallButton from './components/installButton/InstallButton';
import PrivacyPolicy from './components/links/privacyPolicy/PrivacyPolicy';
import PreviewSlider from './components/previewSlider/PreviewSlider';

const App = () => {
  return (
    <Wrapper>
      <Container>
        <AppLink />
        <MainTitle />
        <LandingDesccription />
      </Container>
      <PreviewSlider />
      <Container>
        <IstallButton />
        <PrivacyPolicy />
      </Container>
    </Wrapper>
  );
}

export default App;
