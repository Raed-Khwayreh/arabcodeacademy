import React from "react";
import { SVGProps } from "@/types/SVGProps";

const CheckListIcon: React.FC<SVGProps> = ({}) => {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 597 855"
      width="48"
      height="69"
    >
      <title>image</title>
      <defs>
        <image
          width="527"
          height="809"
          id="imgCheckList"
          href="data:image/png;base64,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"
        />
      </defs>
      <style></style>
      <use id="Layer 1" href="#imgCheckList" x="42" y="15" />
    </svg>
  );
};

export default CheckListIcon;
