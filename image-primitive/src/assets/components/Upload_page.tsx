import Click_upload from './Click_upload';
import '../css/upload_page.css';

interface UploadPageProps {
  setImage: (image: string | null) => void;
}

function Upload_page({ setImage }: UploadPageProps) {
  return (
    <>
      <div className="container upload-icon">
        <Click_upload setImage={setImage} />
        <div>
          <p className="large right">Alright, Let's get started...</p><br />
          <p className="medium center robo">
            Please upload the picture you want to apply the effects on.
            <br />
            Scroll Down to preview and download!
          </p><br />
        </div>
      </div>
    </>
  );
}

export default Upload_page;
