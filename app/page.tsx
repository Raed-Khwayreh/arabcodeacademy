import React from "react";
import Button from "../components/ui/Button/Button";
import loginIconSrc from "../components/ui/Button/buttonSvgIcons/🦆 log_in.svg";
import profileIconSrc from "../components/ui/Button/buttonSvgIcons/🦆 profile_circled.svg";
import moreIconSrc from "../components/ui/Button/buttonSvgIcons/🦆more_horiz_circled_outline.svg";
import chalkboardTeacher from "../components/ui/Button/buttonSvgIcons/🦆 Chalkboard_Teacher.svg";
import Image from "next/image";

const Example = () => (
  <div style={{backgroundColor:'#783ba2'}}>
    <Button
      text="تسجيل الدخول"
      variant="tomato"
      size="medium"
      icon={<Image src={loginIconSrc} alt="Icon" />}
    />
    <br/>
    <br/>
    <Button
      text="انشاء حساب "
      variant="teal"
      size="medium"
      icon={<Image src={profileIconSrc} alt="Icon" />}
    />

<br/>
<br/>
    <Button text="المسارات التعليمية" variant="teal" size="large" icon={<Image src={chalkboardTeacher} alt="Icon" />
      }  />
    <br/>
    <br/>
    <Button text="...المزيد" variant="teal" size="small" icon={<Image src={moreIconSrc} alt="Icon"/>} />

  </div>
);

export default Example;
