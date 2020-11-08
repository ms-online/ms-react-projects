import './App.css';
import { FileUpload } from './components/FileUpload'

function App() {
  return (
    <div className="container">
      <h4 className="display-4 text-center mb-4">
        <i className="fab fa-react"></i>React 文件上传
      </h4>
      <FileUpload/>
    </div>
  );
}

export default App;
