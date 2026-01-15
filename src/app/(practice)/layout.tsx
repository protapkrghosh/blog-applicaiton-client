import Link from "next/link";
import React from "react";

const PracticeLayout = ({
   children,
   marketingSlot,
   salesSlot,
}: {
   children: React.ReactNode;
   marketingSlot: React.ReactNode;
   salesSlot: React.ReactNode;
}) => {
   return (
      <div className="p-6">
         <nav className="mb-6">
            <Link className="mr-5 hover:underline" href="/development">
               Development
            </Link>
            <Link className="mr-5 hover:underline" href="/testing">
               Testing
            </Link>
            <Link className="mr-5 hover:underline" href="/marketing">
               Marketing
            </Link>
            <Link className="mr-5 hover:underline" href="/marketing/setting">
               Setting
            </Link>
            <Link className="hover:underline" href="/sales">
               Sales
            </Link>
         </nav>

         <div className="flex gap-5 mb-5">
            {marketingSlot}
            {salesSlot}
         </div>

         {children}
      </div>
   );
};

export default PracticeLayout;
