export const imageUpload = async (file) => {
  if (!file) throw new Error('No file added');

  const cloudinaryUploadUrl = import.meta.env.VITE_CLOUDINARYUPLOADURL;

  const formData = new FormData();

  formData.append('upload_preset', 'react-journal-appa');
  formData.append('file', file);

  try {
    const fetchConfig = {
      method: 'POST',
      body: formData,
    };

    const response = await fetch(cloudinaryUploadUrl, fetchConfig);
    // console.log(response);
    const cloudResponse = await response.json();
    // console.log(cloudResponse);

    return cloudResponse.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};
