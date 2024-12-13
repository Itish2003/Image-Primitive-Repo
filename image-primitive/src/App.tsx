import { useState } from 'react';
import Download_card from './assets/components/Download_card';
import Landing_page from './assets/components/Landing_page';
import Nav_bar from './assets/components/Nav_bar';
import Upload_page from './assets/components/Upload_page';
import Footer from './assets/components/Footer';

function App() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <>
      <Nav_bar />
      <Landing_page />
      <Upload_page setImage={setImage} />
      <Download_card image={image} />
      <Footer/>
    </>
  );
}

export default App;
