import React, { useEffect, useState } from 'react';

function AwardsComponent({ heading, photos }) {
  const [photoUrls, setPhotoUrls] = useState([]);

  useEffect(() => {
    const fetchPhotoUrls = async () => {
      const urls = await Promise.all(
        photos.map(async (photo) => {
          // Convert the photo string to a Blob object
          const blob = new Blob([photo], { type: 'image/jpeg' }); // Adjust the MIME type as per your requirement
          const url = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
              resolve(reader.result);
            };
            reader.readAsDataURL(blob);
          });
          return url;
        })
      );
      setPhotoUrls(urls);
    };

    fetchPhotoUrls();
  }, [photos]);

  return (
    <div className="award">
      <h3>Awards</h3>
      <h3>{heading}</h3>
      {photoUrls.map((url, index) => (
       
<img
  key={index}
  src={`data:image/jpeg;base64,YmxvYjpodHRwOi8vbG9jYWxob3N0OjUxNzMvMzE5NDhjNzQtNTViYy00YTliLWJkNDctMWNiMmVhM2JmMmFh`}
  alt={`Certificate ${index + 1}`}
/>

      ))}
    </div>
  );
}

export default AwardsComponent;
