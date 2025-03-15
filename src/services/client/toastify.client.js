import { toast, Flip } from "react-toastify";

const toastConfig = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
  transition: Flip,
  style: {
    backgroundColor: "#000",
    color: "#fff",
  },
  iconTheme: {
    primary: "#fff",
    secondary: "#000",
  },
};

export const successClientToast = (message) => {
  toast.success(message, toastConfig);
};

export const errorClientToast = (message) => {
  toast.error(message, toastConfig);
};
