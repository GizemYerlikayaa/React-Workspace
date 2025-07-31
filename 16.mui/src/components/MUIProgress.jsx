import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import LinearProgress from "@mui/material/LinearProgress";

function MUIProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress == 100) {
          return 0;
        }
        const plusValue = Math.floor(Math.random() * 10);
        return Math.min(oldProgress + plusValue, 100);
      });
    }, 500);
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div>
      {/* <CircularProgress />
      <CircularProgress color="warning" />
      <LinearProgress />
      <LinearProgress
        sx={{ marginTop: "25px", marginBottom: "150px" }}
        color="warning"
      /> */}
      <LinearProgress
        sx={{ marginTop: "150px" }}
        variant="determinate"
        value={progress}
      />
    </div>
  );
}

export default MUIProgress;
