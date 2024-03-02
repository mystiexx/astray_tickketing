import axios from "axios";

export async function FileUpload(doc) {
  try {
    const folder = import.meta.env.VITE_APP_CLOUDINARY_FOLDER || "";
    const name = import.meta.env.VITE_APP_CLOUDINARY_NAME;
    const formData = new FormData();
    formData.append("file", doc);
    formData.append("upload_preset", folder);
    const { data } = await axios.post(
      `https://api.cloudinary.com/v1_1/${name}/image/upload`,
      formData,
      {
        headers: { "X-Requested-With": "XMLHttpRequest" },
      }
    );
    return data.secure_url;
  } catch (error) {
    console.log(error);
  }
}
