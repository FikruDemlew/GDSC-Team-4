import React from "react";
import { SyncLoader } from "react-spinners";

const Loding = () => {
  const color = "#1c6098";
  return (
    <div>
      <div className="flex justify-center  h-screen mt-80">
        <SyncLoader
          color={color}
          size={15}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
};

export default Loding;
