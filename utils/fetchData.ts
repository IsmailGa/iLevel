// utils/fetchData.ts
export function fetchData<T>(promise: Promise<T>) {
    let status = "pending";
    let result: T;
    let error: Error;
  
    const suspender = promise.then(
      (response) => {
        status = "success";
        result = response;
      },
      (err) => {
        status = "error";
        error = err;
      }
    );
  
    return {
      read() {
        if (status === "pending") throw suspender; // Suspend the component
        if (status === "error") throw error; // Throw error for Error Boundary
        return result; // Return the data
      },
    };
  }