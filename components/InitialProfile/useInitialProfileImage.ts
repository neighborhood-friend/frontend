import { requestMediaLibraryPermissionsAsync, launchImageLibraryAsync, ImagePickerResult, MediaTypeOptions } from 'expo-image-picker';
import { useState } from 'react';

export const useInitialProfileImage = () => {
  const [image, setImage] = useState<string | null>(null);

  const openGallery = async () => {
    const permissionResult = await requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('갤러리 접근 권한을 허락해주세요.');
      return;
    }

    const pickerResult = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Images,
    });
    if (pickerResult.cancelled === true) {
      return;
    }
    setImage(pickerResult.uri);
  }

  return { openGallery, image };
}