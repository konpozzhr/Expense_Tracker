import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = () => {
  const notify = () => toast.success('Custom toast notification!', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    className: 'custom-toast',
    style: {
      background: '#333',
      color: '#fff',
    }
  });

  return (
    <div>
      {/* <button onClick={notify}>Show Custom Toast</button> */}
      <ToastContainer 
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default CustomToast;
