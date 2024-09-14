"use client";
import CustomAccordion from "@/app/components/Accordion/page";
import Advertising from "@/app/components/Advertising/page";
import styled from "@emotion/styled";
import {
  Box,
  Button,
  FormControl,
  Icon,
  Link,
  List,
  ListItem,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import "dayjs/locale/fa";

const TypoTitle = styled("h2")({
  fontSize: "28px",
  fontWeight: "800",
});
const TypoH = styled("h3")({
  fontSize: "22px",
  fontWeight: "800",
});
const TypoP = styled("p")({
  fontSize: "18px",
  color: "#4b5259 ",
});

const Image = styled("img")({
  objectFit: "cover",
  width: "40%",
  marginRight: "150px",
});
const contents = [
  {
    title: "چند روز قبل از پرواز، بلیط هواپیما را بخریم؟",
    desc: "امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید.",
  },
  {
    title: "در هر پرواز، میزان بار مجاز چقدر است؟",
    desc: "میزان مجاز بار به کلاس پرواز و کلاس نرخی بلیط بستگی دارد. هنگام خرید آنلاین بلیط هواپیما می‌توانید میزان بار مجاز را در اطلاعات بلیط ببینید. طبیعی است که اگر میزان بارتان بیش از حد مجاز باشد، باید جریمه پرداخت کنید.",
  },
  {
    title: "نرخ بلیط هواپیما برای نوزادان و کودکان زیر ۱۲ سال چگونه است؟",
    desc: "نرخ بلیط کودکان و نوزادان به کلاس پرواز و کلاس نرخی بستگی دارد. به صورت کلی، قیمت بلیط مسافر کودک (2 الی 12 سال) معادل 50 الی 100 درصد بلیط بزرگسال، و قیمت بلیط مسافر نوزاد (تا دو سال) 10 درصد بلیط بزرگسال است. هنگام تهیه بلیط هواپیما به این نکته توجه داشته باشید.",
  },
  {
    title: "رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟",
    desc: "خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید.",
  },
  {
    title: "آیا پس از خرید اینترنتی بلیط هواپیما امکان استرداد آن وجود دارد؟",
    desc: "وقتی از علی‌بابا یعنی بهترین سایت خرید بلیط هواپیما ، بلیطتان را رزرو می‌کنید، خیالتان آسوده است که امکان استرداد وجه در صورت کنسل کردن بلیط وجود دارد. میزان جریمه را هم هنگام رزرو آنلاین بلیط هواپیما در قسمت قوانین استرداد بخوانید. میزان جریمه به نوع بلیط، کلاس پروازی، کلاس نرخی و... بستگی دارد.",
  },
  {
    title:
      "آیا پس از خرید بلیط هواپیما، امکان تغییر نام یا نام خانوادگی وجود دارد؟",
    desc: "در پرواز داخلی یا خارجی، امکان تغییر نام و نام خانوادگی در بلیط سیستمی وجود ندارد. اما در بلیط چارتر، برخی از چارترکننده‌ها این تغییر را می‌پذیرند.",
  },
  {
    title:
      "هنگامی که از سایت خرید بلیط هواپیما رزرو بلیط را انجام می‌دهیم، امکان انتخاب صندلی مورد نظرمان وجود دارد؟",
    desc: "خیر؛ هنگام رزرو بلیط هواپیما داخلی یا خارجی امکان انتخاب صندلی وجود ندارد. البته در زمان چک‌این انتخاب محدوده صندلی امکان‌پذیر است.",
  },
];

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Zain, Arial, sans-serif",
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: "Zain",
          right: 30,
          left: "unset",
          top: -4,
          transformOrigin: "right",
          color: "#959EA6",
          "&.Mui-focused": {
            color: "#959EA6",
            transformOrigin: "top right",
          },
        },
        shrink: {
          transform: "translate(15px, -5px) scale(0.75)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          direction: "rtl",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
        },
        notchedOutline: {
          textAlign: "right",
        },
        input: {
          padding: "12px",
        },
      },
    },
  },
});

const initialOldState = { passenger: 1 };
const initialKidState = { kid: 0 };
const initialBabyState = { baby: 0 };
function oldReducer(state, action) {
  switch (action.type) {
    case "Increment":
      return { passenger: state.passenger + 1 };
    case "Decrement":
      return { passenger: Math.max(state.passenger - 1, 1) };
  }
}
function kidReducer(state, action) {
  switch (action.type) {
    case "IncrementKid":
      return { kid: state.kid + 1 };
    case "DecrementKid":
      return { kid: Math.max(state.kid - 1, 0) };
  }
}
function babyReducer(state, action) {
  switch (action.type) {
    case "IncrementBaby":
      return { baby: state.baby + 1 };
    case "DecrementBaby":
      return { baby: Math.max(state.baby - 1, 0) };
  }
}

const DomesticFlight = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [selectedDepartureDate, setSelectedDepartureDate] = useState(null);
  const [selectedReturnDate, setSelectedReturnDate] = useState(null);
  const [oldState, dispatch] = useReducer(oldReducer, initialOldState);
  const [kidState, kidDispatch] = useReducer(kidReducer, initialKidState);
  const [babyState, babyDispatch] = useReducer(babyReducer, initialBabyState);
  const [isListOpen, setIsListOpen] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        listRef.current &&
        !listRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setIsListOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [option, setOption] = React.useState("یک طرفه");

  const handleChange = (event) => {
    setOption(event.target.value);
    option === "رفت و برگشت" ? setIsDisabled(true) : setIsDisabled(false);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid rgba(0,0,0,0.12)",
          marginBottom: "30px",
        }}
      >
        <FormControl
          variant="outlined"
          size="small"
          sx={{ minWidth: "auto", paddingX: "40px", paddingY: "20px" }}
        >
          <Select
            id="travel-option"
            value={option}
            onChange={handleChange}
            sx={{
              width: "fit-content",
              borderRadius: "20px",
              "& .MuiSelect-select": {
                display: "flex",
                alignItems: "center",
                padding: "8px",
                width: "fit-content",
              },
              "& .MuiSelect-icon": {
                right: "8px",
              },
            }}
          >
            <MenuItem value="یک طرفه">یک طرفه</MenuItem>
            <MenuItem value="رفت و برگشت">رفت و برگشت</MenuItem>
          </Select>
        </FormControl>
        <Box
          sx={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-evenly",
            paddingX: "40px",
          }}
        >
          <Box sx={{ direction: "rtl", position: "relative" }}>
            <ThemeProvider theme={theme}>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    paddingX: "20px",
                  },
                }}
                id="outlined-basic"
                label="مبدا (شهر)"
                variant="outlined"
              />
            </ThemeProvider>
            <Icon
              sx={{
                borderRadius: "50%",
                border: "1px solid rgba(0,0,0,0.2)",
                position: "absolute",
                top: "50%",
                right: "50%",
                backgroundColor: "white",
                transform: "translate(65%,-50%)",
                zIndex: "999",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "14px",
                padding: "15px",
              }}
              className="bi bi-arrow-left-right"
            ></Icon>
            <ThemeProvider theme={theme}>
              <TextField
                sx={{
                  "& .MuiInputLabel-root": {
                    marginX: "10px",
                  },
                  "& .MuiInputLabel-shrink": {
                    transform: "translate(25px, -30%) scale(0.75)",
                  },
                  "& .MuiOutlinedInput-root": {
                    paddingX: "20px",
                    paddingRight: "30px",
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                  },
                }}
                id="outlined-basic"
                label="مقصد (شهر)"
                variant="outlined"
              />
            </ThemeProvider>
          </Box>
          <Box>
            <ThemeProvider theme={theme}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="fa"
              >
                <DatePicker
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderTopLeftRadius: "0px",
                      borderBottomLeftRadius: "0px",
                    },
                  }}
                  label="تاریخ رفت"
                  value={selectedDepartureDate}
                  onChange={(newValue) => setSelectedDepartureDate(newValue)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      id="departure-date"
                      variant="outlined"
                    />
                  )}
                />
              </LocalizationProvider>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                adapterLocale="fa"
              >
                <DatePicker
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "0px",
                    },
                  }}
                  label="تاریخ برگشت"
                  value={selectedReturnDate}
                  onChange={(newValue) => setSelectedReturnDate(newValue)}
                  disabled={isDisabled}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      id="return-date"
                      variant="outlined"
                    />
                  )}
                />
              </LocalizationProvider>
            </ThemeProvider>
          </Box>
          <Box sx={{ position: "relative" }}>
            <ThemeProvider theme={theme}>
              <TextField
                id="outlined-read-only-input"
                label="مسافرین"
                value={`${
                  oldState.passenger + babyState.baby + kidState.kid
                }  مسافر`}
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
                onClick={() => setIsListOpen(!isListOpen)}
                inputRef={inputRef}
              />
            </ThemeProvider>

            {isListOpen && (
              <List
                ref={listRef}
                sx={{
                  position: "absolute",
                  top: "100%",
                  right: "0",
                  backgroundColor: "white",
                  zIndex: 1000,
                  width: "200%",
                  boxShadow: "0px 0px 8px rgba(0,0,0,0.2)",
                  borderRadius: "4px",
                }}
              >
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginY: "10px",
                  }}
                >
                  <Typography sx={{ fontFamily: "Zain", marginLeft: "5px" }}>
                    بزرگسال
                  </Typography>
                  <Typography sx={{ fontFamily: "Zain", color: "#6C7690" }}>
                    (۱۲ سال به بالا)
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "-15px",
                    }}
                  >
                    <Button
                      sx={{ padding: "0" }}
                      onClick={() => dispatch({ type: "Increment" })}
                    >
                      <Icon
                        className="bi bi-plus-square-fill"
                        sx={{
                          color: "#0077db",
                          transition: "0.4s",
                          ":hover": { color: "#00569E" },
                          display: "flex",
                        }}
                      ></Icon>
                    </Button>
                    <Typography>{oldState.passenger}</Typography>
                    <Button
                      sx={{ padding: "0" }}
                      onClick={() => dispatch({ type: "Decrement" })}
                    >
                      <Icon
                        className="bi bi-dash-square-fill"
                        sx={{
                          color: "#0077db",
                          transition: "0.4s",
                          ":hover": { color: "#00569E" },
                          display: "flex",
                          opacity: oldState.passenger == 1 ? 0.5 : 1,
                          cursor:
                            oldState.passenger == 1 ? "not-allowed" : "pointer",
                        }}
                      ></Icon>
                    </Button>
                  </Box>
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginY: "10px",
                  }}
                >
                  <Typography sx={{ fontFamily: "Zain", marginLeft: "5px" }}>
                    کودک
                  </Typography>
                  <Typography sx={{ fontFamily: "Zain", color: "#6C7690" }}>
                    (۲ تا ۱۲ سال)
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "-15px",
                    }}
                  >
                    <Button
                      sx={{ padding: "0" }}
                      onClick={() => kidDispatch({ type: "IncrementKid" })}
                    >
                      <Icon
                        className="bi bi-plus-square-fill"
                        sx={{
                          color: "#0077db",
                          transition: "0.4s",
                          ":hover": { color: "#00569E" },
                          display: "flex",
                        }}
                      ></Icon>
                    </Button>
                    <Typography>{kidState.kid}</Typography>
                    <Button
                      sx={{ padding: "0" }}
                      onClick={() => kidDispatch({ type: "DecrementKid" })}
                    >
                      <Icon
                        className="bi bi-dash-square-fill"
                        sx={{
                          color: "#0077db",
                          transition: "0.4s",
                          ":hover": { color: "#00569E" },
                          display: "flex",
                          opacity: kidState.kid == 0 ? 0.5 : 1,
                          cursor: kidState.kid == 0 ? "not-allowed" : "pointer",
                        }}
                      ></Icon>
                    </Button>
                  </Box>
                </ListItem>{" "}
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginY: "10px",
                  }}
                >
                  <Typography sx={{ fontFamily: "Zain", marginLeft: "5px" }}>
                    نوزاد
                  </Typography>
                  <Typography sx={{ fontFamily: "Zain", color: "#6C7690" }}>
                    (۱۰ روز تا ۲ سال)
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "-15px",
                    }}
                  >
                    <Button
                      sx={{ padding: "0" }}
                      onClick={() => babyDispatch({ type: "IncrementBaby" })}
                    >
                      <Icon
                        className="bi bi-plus-square-fill"
                        sx={{
                          color: "#0077db",
                          transition: "0.4s",
                          ":hover": { color: "#00569E" },
                          display: "flex",
                        }}
                      ></Icon>
                    </Button>
                    <Typography>{babyState.baby}</Typography>
                    <Button
                      sx={{ padding: "0" }}
                      onClick={() => babyDispatch({ type: "DecrementBaby" })}
                    >
                      <Icon
                        className="bi bi-dash-square-fill"
                        sx={{
                          color: "#0077db",
                          transition: "0.4s",
                          ":hover": { color: "#00569E" },
                          display: "flex",
                          opacity: babyState.baby == 0 ? 0.5 : 1,
                          cursor:
                            babyState.baby == 0 ? "not-allowed" : "pointer",
                        }}
                      ></Icon>
                    </Button>
                  </Box>
                </ListItem>
              </List>
            )}
          </Box>
          <Button
            sx={{
              backgroundColor: "#FDB713",
              color: "black",
              fontWeight: "700",
              fontSize: "18px",
              fontFamily: "Zain",
              padding: "0 60px",
              transiton: "0.4s",
              ":hover": { backgroundColor: "#E3A107" },
            }}
          >
            جستجو
          </Button>
        </Box>
      </Box>
      <Advertising />
      <TypoTitle className="mt-10">پرسش ها شما</TypoTitle>
      <Box
        sx={{
          marginTop: "20px",
          borderRadius: "10px",
          overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.12)",
        }}
      >
        {contents.map((item) => {
          return <CustomAccordion title={item.title} desc={item.desc} />;
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ marginTop: "56px" }}>
          <TypoTitle>بلیط هواپیما</TypoTitle>
          <TypoP className="my-6">
            علی‌بابا بزرگترین و معتبرترین سایت خرید اینترنتی بلیط هواپیما ، قطار
            و اتوبوس در کشور است که از سال ۱۳۹۳ کار خود را شروع کرده و در این
            مدت توانسته رضایت درصد قابل توجهی از کاربران را به دست بیاورد. در
            ابتدا، فروش بلیط پرواز داخلی در دستور کار علی‌بابا قرار داشت؛ اما به
            مرور امکان خرید سایر محصولات گردشگری نیز به علی‌بابا اضافه شد.
          </TypoP>
          <TypoH className="mb-4">مزایای خرید بلیط هواپیما از علی‌بابا</TypoH>
          <TypoP>
            شما با خرید بلیط هواپیما از علی‌بابا با سامانه مطمئن و معتبری
            روبه‌رو هستید که تمام نیازهایتان را پاسخ می‌دهد. برای خرید آنلاین
            بلیط هواپیما در علی‌بابا کافیست مبدا، مقصد و تاریخ پرواز خود را
            انتخاب کنید. پس از کلیک روی جستجو، لیست{" "}
            <Link href="#" underline="none">
              قیمت بلیط هواپیما
            </Link>{" "}
            به مقصد مورد نظر شما ظاهر می‌شود. در این لیست، انتخابهای متعددی پیش
            روی شماست. برای اینکه گزینه‌ ها را برای خرید بلیط هواپیما محدودتر
            کنید، علی‌بابا ابزارهای مختلفی در اختیار شما می‌گذارد.
          </TypoP>
        </Box>
        <Image src="https://cdn.alibaba.ir/h2/desktop/assets/images/baggage/baggage@3x-bda919ec.webp" />
      </Box>
      <TypoP className="my-4">
        یکی از ابزارهای بسیار مفید و کاربردی برای خرید اینترنتی بلیط هواپیما،
        تقویم قیمتی است. با استفاده از تقویم قیمتی شما می‌توانید کمترین و
        بیشترین قیمت بلیط پرواز را در روزهای قبل و بعد از آن تاریخ مشاهده کنید.
        در صورتی که اصرار به خرید بلیط هواپیما در یک روز خاص نداشته باشید، این
        امکان به شما کمک می‌کند تا مبلغ بلیط هواپیما برایتان با مبلغ به صرفه تری
        تمام شود.
      </TypoP>
      <TypoP className="my-4">
        علاوه بر این، با استفاده از فیلترهای کنار صفحه می‌توانید ایرلاین مورد
        نظرتان را انتخاب کنید. ضمنا می‌توانید،{" "}
        <Link href="#" underline="none">
          بلیط چارتر هواپیما
        </Link>{" "}
        یا سیستمی را فعال کنید تا فقط یکی از این دو نوع بلیط را مشاهده کنید.
        {"  "}
        <Link href="#" underline="none">
          بلیط هواپیما خارجی
        </Link>{" "}
        ،کلاس پروازی و زمان پرواز هم از دیگر گزینه‌هایی است که با انتخاب آنها،
        تعداد بلیط ها محدودتر و رزرو بلیط هواپیما برای شما آسانتر می‌شود.
      </TypoP>
      <TypoP className="my-4">
        برای پرداخت هزینه می‌توانید از کارت شتاب استفاده کنید. پس از پرداخت،
        خرید اینترنتی بلیط هواپیما با موفقیت انجام میشود و بلیط به ایمیل شما
        ارسال میشود. همچنین در همه این مراحل، پشتیبانی علی‌بابا در کنار شماست تا
        هر زمانی که سوال یا مشکلی داشتید، 24 ساعته پاسخگوی شما باشد.
      </TypoP>
      <TypoH className="my-4">امکان استرداد بلیط هواپیما</TypoH>
      <TypoP className="my-4">
        یکی دیگر از امکانات علی‌بابا استرداد آنلاین بلیط هواپیما (کنسلی بلیط)
        است. در صورتی که پس از رزرو بلیط هواپیما برنامه سفرتان تغییر کرده، به
        راحتی می‌توانید طبق قوانین کنسلی پرواز داخلی، بلیط هواپیمای خود را کنسل
        کنید. پس از استرداد، پول شما در کمترین زمان ممکن به حسابتان برگردانده
        می‌شود. شما برای خرید اینترنتی بلیط هواپیما از علی‌بابا می‌توانید از
        تلفن همراه، رایانه شخصی یا تبلت استفاده کنید. علی‌بابا در همه این
        ابزارها کاربرپسند است و شما خریدی آسان را تجربه خواهید کرد. همچنین امکان
        نصب و استفاده از اپلیکیشن علی‌بابا برای گوشی های اندروید و آیفون وجود
        دارد.
      </TypoP>
      <TypoH className="my-4">رزرو بلیط هواپیما از معتبرترین ایرلاین‌ها</TypoH>

      <TypoP className="my-4">
        شما برای خرید بلیط هواپیما از بین ایرلاینهای مختلف حق انتخاب دارید و
        می‌توانید از ایرلاینهای ماهان، زاگرس، کیش ایر، قشم ایر، آسمان، کاسپین،
        تابان، وارش یا معراج، بلیط پرواز داخلی خود را خریداری کنید.
      </TypoP>
      <TypoP className="my-4">
        هر یک از این ایرلاین ها ویژگیها و مشخصات خود را دارند. برخی امکانات و
        خدمات رفاهی بیشتر دارند و برخی دیگر بلیط هواپیما را با قیمت به صرفه تری
        ارائه می‌دهند. زمانی که در علی‌بابا لیست بلیط تمام این ایرلاین ها را
        مشاهده می‌کنید، می‌توانید از بین آنها انتخاب کنید.
      </TypoP>
      <TypoH className="my-4">علی‌بابا: رتبه یک خرید اینترنتی بلیط سفر</TypoH>
      <TypoP className="my-4">
        علی‌بابا طی این سالها، اعتبار زیادی نزد مشتریان خود کسب کرده است. طبق
        نظرسنجی، 97.2 درصد از مشتریان علی‌بابا از خدمات این سامانه راضی بوده‌اند
        و استفاده از آن را به دوستان و آشنایان خود پیشنهاد داده‌اند. سرعت سادگی
        خرید اینترنتی بلیط هواپیما، اعتبار و خوشنامی، امکان استرداد آنلاین بلیط
        هواپیما و پشتیبانی 24 ساعته در تمام روزهای هفته، رتبه یک فروش بلیط را از
        آنِ علی‌بابا کرده است.
      </TypoP>
      <TypoP className="my-4">
        شما با رزرو بلیط هواپیما در علی‌بابا، از سفری راحت و بی‌دردسر مطمئن
        خواهید بود.
      </TypoP>
    </>
  );
};

export default DomesticFlight;
