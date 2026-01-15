"use client";

import { useEffect } from "react";

const AboutError = ({
   error,
   reset,
}: {
   error: Error & { digest?: string };
   reset: () => void;
}) => {
   useEffect(() => {
      // We can pass this error to a logger
      console.error(error);
   }, [error]);

   return (
      <div>
         <h1>Something went wrong, Please try aging later</h1>
         <button onClick={() => reset()} className="cursor-pointer">
            Retry
         </button>
      </div>
   );
};

export default AboutError;
