"use client";

import { useEffect, useState } from "react";
import { useInterval } from "usehooks-ts";
import { Button, Typography } from "@mui/material";

export const CountDown = ({
  count,
  finishedText,
  onClick,
}: {
  count: number;
  finishedText: string;
  onClick: () => void;
}) => {
  const [counter, setCounter] = useState(count);
  const [isActive, setIsActive] = useState(true);

  useInterval(
    () => setCounter((counter) => (counter > 0 ? counter - 1 : 0)),
    isActive ? 1000 : null,
  );

  const min = Math.floor(counter / 60)
    .toString()
    .padStart(2, "0");
  const sec = (counter % 60).toString().padStart(2, "0");
  const time = [min, sec].join(" : ");
  const isTimeOver = counter === 0;

  useEffect(() => {
    if (isTimeOver) {
      setIsActive(false);
    }
  }, [isTimeOver]);

  return (
    <>
      {isTimeOver ? (
        <Button size="small" variant="outlined" onClick={onClick}>
          {finishedText}
        </Button>
      ) : (
        <Typography dir="rtl" variant="12" sx={{ color: "grey.500" }}>
          تا ارسال مجدد: {time}
        </Typography>
      )}
    </>
  );
};
