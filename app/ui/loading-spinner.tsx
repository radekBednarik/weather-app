"use client";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
