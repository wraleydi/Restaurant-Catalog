const loading = document.getElementById("loading");
const overlay = document.getElementById("overlay");

const showLoading = () => {
  loading.style.display = "flex";
  overlay.style.display = "block";
};

const hideLoading = () => {
  loading.style.display = "none";
  overlay.style.display = "none";
};

export { showLoading, hideLoading };
