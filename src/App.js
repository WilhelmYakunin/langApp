import './css/appStyles.css';
import Wrapper from './components/wrapper/Wrapper';
import AppLink from './components/links/appLink/AppLink';
import MainTitle from './components/mainTitle/MainTitle';
import LandingDesccription from './components/description/LandingDesccription';
import IstallButton from './components/buttons/installButton/InstallButton';
import PrivacyPolicy from './components/links/privacyPolicy/PrivacyPolicy';
import PreviewSlider from './components/previewSlider/PreviewSlider';

const App = () => {
  return (
    <Wrapper>
      <AppLink />
      <MainTitle />
      <LandingDesccription />
      <PreviewSlider />
      <IstallButton />
      <PrivacyPolicy />
    </Wrapper>
  );
}

export default App;
