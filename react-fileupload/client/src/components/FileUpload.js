import React, { Fragment, useState } from 'react'
import axios from 'axios'
import Message from './Message'
import Progress from './Progress'

export const FileUpload = () => {
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('选择文件');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('')
    const [uploadPercentage, setUploadPercentage] = useState(0);

    const onChange = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        var formData = new FormData();
        formData.append('file', file);
        try {
            const res = await axios.post('/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
                onUploadProgress: progressEvent => {
                    setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));

                    setTimeout(() => setUploadPercentage(0), 5000);
                }
                
                
            });

            const { fileName, filePath } = res.data;
            setUploadedFile({ fileName, filePath });
            setMessage('上传成功')
        } catch (error) {
            if (error.response.status === 500) {
               setMessage('服务器存在问题...')
            } else {
                setMessage(error.response.data.msg);
           }
        }
    }
    return (
        <Fragment>
            {message ? <Message msg={message}/> : null}
            <form onSubmit={onSubmit}>
            <div className="custom-file">
                <input type="file" className="custom-file-input" id="customFile" onChange={onChange}/>
                    <label className="custom-file-label" htmlFor="customFile">{ filename }</label>
                </div>
                
                <Progress percentage={uploadPercentage} />

                <input type="submit" value="上传文件" className="btn btn-primary btn-block mt-4"/>
            </form>
            {uploadedFile ? (
                <div className="row mt-5">
                    <div className="col-md-6 m-auto">
                        <h3 className="text-center">{uploadedFile.fileName}</h3>
                        <img src={uploadedFile.filePath} alt='' style={{width:'100%'}}/>
                    </div>
                </div>
            ) :null}
        </Fragment>
    )
}
