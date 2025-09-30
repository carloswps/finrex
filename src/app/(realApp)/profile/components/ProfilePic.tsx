'use client'
import UploadIcon from "@/app/(realApp)/goals/components/icons/UploadIcon.svg";
import {ChangeEvent, useState} from "react";
import axios from "axios";

const ProfilePic = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileUrl, setFileUrl] = useState<string | null>(null);

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0) {
            const currentFile = e.target.files[0];
            setSelectedFile(currentFile);

            setFileUrl(URL.createObjectURL(currentFile));

            const formData = new FormData();
            formData.append('file', currentFile);

            try {
                const req = await axios.post('https://b7web.com.br/uploadtest/', formData, {
                    headers : {
                        "Content-Type" : "multipart/form-data"
                    }
                });
                console.log('Success: ', req.data)
            } catch (error) {
                console.error('Upload Error: ', error);
            }
        }
    }

    const uniqueId = 'profile-pic-upl';

    return (
        <div className={'w-24 h-24 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center relative mb-4 -mt-6'}>
            <input
                id={uniqueId}
                className={'absolute inset-0 w-full h-full cursor-pointer opacity-0'}
                type={'file'}
                onChange={handleFileChange}
            />

            <label htmlFor={uniqueId} className={'absolute inset-0 w-full h-full cursor-pointer'}>
                {fileUrl ? (
                    <img src={fileUrl} alt="Foto de Perfil" className={'w-full h-full object-cover'} />
                ) : (
                    <div className={'w-full h-full flex items-center justify-center bg-[var(--green-theme)]'}>
                        <UploadIcon className={'w-12 h-12 relative bottom-1'}/>
                    </div>
                )}
            </label>
        </div>
    )
}

export default ProfilePic;