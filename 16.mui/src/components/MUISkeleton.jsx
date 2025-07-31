import React, { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Mercedes from "../images/Mercedes.jpg";

function MUISkeleton() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <div>
      {loading ? (
        <Skeleton variant="rounded" width={250} height={150} animation="wave" />
      ) : (
        <img src={Mercedes} width={250} height={150} />
      )}
    </div>
  );
}

export default MUISkeleton;
