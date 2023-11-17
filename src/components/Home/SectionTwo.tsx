import React from "react";
import Image from "next/image";
import img from "../../img/teacher-2.png";
import Container from "@mui/material/Container";
const SectionTwo: React.FC = () => {
  return (
    <div className="mt-10">
      <Container
        className="flex flex-col md:flex-row items-center "
        style={{ justifyContent: "space-between" }}
      >
        <div className="mb-6 md:mb-0">
          <Image
            src={img} // استخدم مسار الصورة كما هو هنا
            width={300} // ضع هنا العرض المطلوب
            height={200} // والارتفاع المطلوب
            alt="Books"
          />
        </div>

        <div className="md:ml-10 flex items-center">
          <div className="">
            <h3 className="text-center flex justify-center mb-10 md:text-right">
              ماذا نقدم للمدرس @
            </h3>

            <ul
              className="text-right list-decimal"
              style={{ direction: "rtl" }}
            >
              <li className="mb-2">
                إنشاء مجموعات دراسية جماعية للطلبة والتواصل المباشر معهم
              </li>
              <li className="mb-2">
                الدعم الفني للحصص التعليمية قبل وأثناء وبعد الحصة الدراسية.
              </li>
              <li className="mb-2">
                توفر المنصة التدريب للمدرسين مما يطور من مهاراتهم للقيام بعملية
                التعليم عن بعد.
              </li>
              <li className="mb-2">
                إدارة المنصة من الناحية التقنية وإدارة المحتوى.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionTwo;
