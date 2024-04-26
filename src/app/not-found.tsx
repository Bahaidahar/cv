"use client";

import ArrowInCircle from "@/shared/icons/ArrowInCircle";
import SadIcon from "@/shared/icons/SadIcon";
import Link from "next/link";

const NotFound = () => {
  return (
    <html>
      <body>
        <div className=" flex justify-center items-center h-screen ">
          <div className=" flex flex-col justify-center items-center gap-4">
            <SadIcon size={200} />
            <Link href={`/en`}>
              <ArrowInCircle size={80} rotate={180} />
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
