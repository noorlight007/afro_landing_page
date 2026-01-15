import Swal from "sweetalert2";

//  Success Alert
export const SuccessAlert = (title = "Success", text = "") => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title,
    text,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
};

//  Error Alert
export const ErrorAlert = (
  title = "Error",
  text = "Something went wrong"
) => {
  Swal.fire({
    icon: "error",
    title,
    text,
    showConfirmButton: true,
  });
};
