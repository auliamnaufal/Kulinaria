const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then((res) => {
      console.log('SW registered: ', res);
    }).catch((err) => {
      console.log('SW failed to register: ', err);
    });
  }
};

export default swRegister;
