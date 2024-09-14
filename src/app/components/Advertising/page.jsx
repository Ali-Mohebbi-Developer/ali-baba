"use client";
import styled from "@emotion/styled";
import { Box, Icon, Link } from "@mui/material";
import React, { useEffect, useState } from "react";
const TypoTitle = styled("h2")({
  fontSize: "20px",
  fontWeight: "800",
});
const TypoP = styled("p")({
  fontSize: "16px",
});
const TypoSpan = styled("span")({
  fontSize: "14px",
  color: "gray",
  display: "flex",
  alignItems: "flex-end ",
});
const TypoSpanExtra = styled("span")({
  fontSize: "16px",
  display: "flex",
  borderRadius: "50px",
  backgroundColor: "#84e199",
  position: "absolute",

  padding: "1px 6px",
  transform: "translate(120%,-60%)",
});
const Image = styled("img")({
  objectFit: "cover",
});
const contents = [
  {
    id: 1,
    content: "سفر کارت (سازمانی)",
    src: "https://cdn.alibaba.ir/h2/desktop/assets/images/safarcard-3dc2c4c4.svg",
    extraContent: "جدید",
  },
  {
    id: 2,
    content: "بیمه مسافرتی",
    src: "https://cdn.alibaba.ir/h2/desktop/assets/images/insurance-icon-bb51c425.svg",
  },
  {
    id: 3,
    content: "ویزای سفر",
    src: "https://cdn.alibaba.ir/h2/desktop/assets/images/visa-icon-d8507c8e.svg",
  },
  {
    id: 4,
    content: "تور گروهی",
    src: "https://cdn.alibaba.ir/h2/desktop/assets/images/gtour-icon-5e641f1b.svg",
  },
];

const Advertising = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Box>
      <TypoTitle className="mb-5">سایر خدمات علی بابا</TypoTitle>
      <Box
        className="mb-5"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px solid rgba(0,0,0,0.12)",
          borderRadius: "5px",
        }}
      >
        {contents.map((item) => {
          return (
            <Box
              className="options"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingX: "50px",
                paddingY: "10px",
                cursor: "pointer",
              }}
              key={item.id}
            >
              {isClient && <Image src={item.src} className="ml-2" />}
              {item.extraContent && (
                <TypoSpanExtra>{item.extraContent}</TypoSpanExtra>
              )}
              <TypoP>{item.content}</TypoP>
            </Box>
          );
        })}
      </Box>
      <style jsx global>{`
        .options:not(:last-child) {
          position: relative;
        }

        .options:not(:last-child)::after {
          content: "";
          position: absolute;
          left: -20%;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 50%;
          background-color: #d0d0d0;
        }
      `}</style>
      {isClient && (
        <>
          <Link href="#">
            <Image
              className="rounded-md mb-5"
              src="https://cdn.alibaba.ir/h2/desktop/assets/images/breaking-news/phone-sales-4af98b55.webp"
            />
          </Link>
          <Box className="mb-5" sx={{ display: "flex" }}>
            <Link href="#">
              <Image
                className="rounded-md"
                src="https://cdn.alibaba.ir/cms/uploads/Safar_Card_Cardview_Banner_Desktop_02_09_22_ed374215f4.png"
              />
            </Link>
            <Link href="#">
              <Image
                className="rounded-md"
                src="https://cdn.alibaba.ir/cms/uploads/AL_Digitalmarketing_Kish_Tour_Festival_Cardview_Banner_Desktop_03_05_17_1_1_33179c9065.png"
              />
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              border: "1px solid rgba(0,0,0,0.12)",
              borderRadius: "10px",
              paddingTop: "20px",
            }}
          >
            <Link href="#">
              <Image src="https://cdn.alibaba.ir/h2/desktop/assets/images/app-mobile/qrcode-56155e39.png" />
            </Link>
            <Box>
              <TypoTitle className="text-3xl mb-2">اپلیکیشن علی‌بابا</TypoTitle>
              <TypoP className="text-xl mb-5">
                سریع‌تر و مطمئن‌تر به سفر بروید ‌
              </TypoP>
              <Link
                sx={{ display: "flex", cursor: "pointer" }}
                className="mb-5"
                underline="none"
              >
                <TypoP className="text-xl">مشاهده لینک های دانلود</TypoP>
                <Icon className="bi bi-chevron-left"></Icon>
              </Link>
              <TypoSpan>
                <Icon className="bi bi-apple flex"></Icon>
                <Icon className="bi bi-android mx-1 flex"></Icon>
                <TypoP>قابلیت نصب روی Android و iOS</TypoP>
              </TypoSpan>
            </Box>
            <Link href="#">
              <Image
                className="w-[334px] h-[294px]"
                src="https://cdn.alibaba.ir/h2/desktop/assets/images/app-mobile/app-mobile@4x-e3e3b7dc.webp"
              />
            </Link>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Advertising;
