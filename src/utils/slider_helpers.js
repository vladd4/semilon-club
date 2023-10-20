export const handleLinkClick = (
  serviceName,
  ref,
  id,
  setActiveService,
  setSliderImages,
  styles
) => {
  setSliderImages(serviceName.images);
  setActiveService(serviceName);
  ref.current.classList.add(styles.animated);
  document.querySelector(`#${id}`).classList.add(styles.animated);
  setTimeout(() => {
    ref.current.classList.remove(styles.animated);
    document.querySelector(`#${id}`).classList.remove(styles.animated);
  }, 1100);
};
