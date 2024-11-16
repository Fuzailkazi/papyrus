import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Home() {
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({});

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}
