import React from 'react';
import { Typography } from "@material-tailwind/react";

const NotFound = () => {
  return (
    <div className="container flex justify-center my-12">
      <Typography variant="h1" color="blue" textGradient>
        Page Not Found!
      </Typography>
    </div>
  );
};

export default NotFound;
