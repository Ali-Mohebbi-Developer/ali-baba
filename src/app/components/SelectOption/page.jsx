"use client";

import { Box, Button, Icon, List, ListItem } from "@mui/material";
import React, { useState, useEffect, Suspense } from "react";
import { styled } from "@mui/material/styles";
import Typo from "../MuiComponents/Typo";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import HomePage from "@/app/Pages";

const Image = styled("img")({
  objectFit: "cover",
});

const options = [
  {
    id: 1,
    path: "/?type=domestic-flight",
    icon: "bi bi-airplane",
    content: "پرواز داخلی",
  },
  {
    id: 2,
    path: "/?type=international-flight",
    icon: "bi bi-airplane-engines",
    content: "پرواز خارجی",
  },
  { id: 3, path: "/?type=train", icon: "bi bi-train-front", content: "قطار" },
  { id: 4, path: "/?type=bus", icon: "bi bi-bus-front", content: "اتوبوس" },
  { id: 5, path: "/?type=tour", icon: "bi bi-backpack2", content: "تور" },
  { id: 6, path: "/?type=hotel", icon: "bi bi-buildings", content: "هتل" },
  {
    id: 7,
    path: "/?type=villa",
    icon: "bi bi-house-door",
    content: "ویلا و اقامتگاه",
  },
];

const SelectOption = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SelectOptionContent />
    </Suspense>
  );
};

const SelectOptionContent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [contentType, setContentType] = useState("پرواز داخلی");

  useEffect(() => {
    const queryType = searchParams.get("type");
    if (queryType) {
      const selectedOption = options.find((option) =>
        option.path.includes(queryType)
      );
      if (selectedOption) {
        setContentType(selectedOption.content);
      }
    }
  }, [pathname, searchParams]);

  const handleClick = (path, type) => {
    router.push(path, undefined, { shallow: true });
    setContentType(type);
  };

  return (
    <>
      <Box sx={{ width: "115%", marginRight: "-7.5%" }}>
        <Image
          sx={{ width: "100%" }}
          src={`/img/${
            options.find((option) => option.content === contentType)?.id
          }.webp`}
        />
      </Box>
      <List
        sx={{
          position: "relative",
          display: "flex",
          marginTop: "-89px",
          paddingTop: "10px",
          paddingBottom: "0px",
          paddingInline: "100px",
          backgroundColor: "white",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          border: "1px solid rgba(0, 0, 0, .12)",
        }}
      >
        {options.map((option) => (
          <ListItem
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={option.id}
          >
            <Button
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingY: "0.2rem",
                color: "black",
                position: "relative",
              }}
              className={`${
                option.content === contentType
                  ? "text-blue-600 after:absolute after:w-full after:h-1 after:bg-blue-600 after:-bottom-2 after:left-0 after:rounded-t-full "
                  : ""
              }`}
              onClick={() => handleClick(option.path, option.content)}
            >
              <Icon
                className={option.icon}
                sx={{ display: "flex", marginBottom: "0.3rem" }}
              ></Icon>
              <Typo> {option.content} </Typo>
            </Button>
          </ListItem>
        ))}
      </List>

      <HomePage contentType={contentType} />
    </>
  );
};

export default SelectOption;
