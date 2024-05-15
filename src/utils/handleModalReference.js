export const handleModalReference = (
  setReferenceImage,
  modalReferenceRef,
  imageSrc
) => {
  setReferenceImage(imageSrc);
  if (modalReferenceRef.current) {
    modalReferenceRef.current.openModal();
  }
};
