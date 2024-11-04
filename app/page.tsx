import React from "react";
import Button from "./Components/Button/Button";
import loginIconSrc from "./Components/Button/buttonSvgIcons/🦆 icon _log in_.svg";
import profileIconSrc from "./Components/Button/buttonSvgIcons/🦆 icon _profile circled_ (1).svg";
import moreIconSrc from "./Components/Button/buttonSvgIcons/🦆 icon _more horiz circled outline_.svg";

import Image from "next/image";

const Example = () => (
  <div style={{backgroundColor:'#783ba2'}}>
    <Button
      text="تسجيل الدخول"
      variant="tomato"
      size="medium"
      icon={<Image src={loginIconSrc} alt="Icon" />}
    />
    <Button
      text="انشاء حساب "
      variant="teal"
      size="medium"
      icon={<Image src={profileIconSrc} alt="Icon" />}
    />
    <Button text="المدونة" variant="transparent" size="large" />

    <Button text="...المزيد" variant="teal" size="small" icon={<Image src={moreIconSrc} alt="Icon"/>} />

  </div>
);

export default Example;
