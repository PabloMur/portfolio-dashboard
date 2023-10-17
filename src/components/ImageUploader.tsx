"use client";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
//import { useRecoilState } from "recoil";
//import { userImageUploadUrlAtom } from "../../atoms/index";

const FileUploader = () => {
  const [fileData, setFileData] = useState("");

  const onDrop = useCallback((acceptedFiles: any) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = (event: any) => {
      setFileData(event.target.result);
    };

    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      {!fileData && (
        <div
          {...getRootProps()}
          className="w-full h-96 flex items-center justify-center p-3"
        >
          <input {...getInputProps()} />
          <p className="text-center">
            Arrastra y suelta archivos aquí, o haz clic para seleccionar
            archivos
          </p>
        </div>
      )}
      {fileData && (
        <div className="preview">
          <img src={fileData} alt="Preview" />
        </div>
      )}
    </div>
  );
};

export default FileUploader;
