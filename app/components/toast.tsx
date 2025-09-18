"use client";

import type { FC, PropsWithChildren } from "react";

import { Toaster as BaseToastContainer, toast } from "sonner";
import theme from "~/theme";

const defaultProps = {
  duration: 5000,
  position: "top-center",
} satisfies ToastProps;

export const ToastContainer: FC<PropsWithChildren<ToastProps>> = (props) => (
  <>
    {props.children}
    <BaseToastContainer
      {...defaultProps}
      {...props}
      id={props.id?.toString()}
    />
  </>
);

type ToastProps = Parameters<typeof toast>[1];

type Props = {
  title?: string | undefined;
  content: string;
  type?: "success" | "warning" | "error";
} & ToastProps;

const getBackgroundColor = (type: "success" | "warning" | "error") => {
  switch (type) {
    case "success":
      return theme.palette.success; // #017785
    case "warning":
      return theme.palette.warning; // #f86534
    case "error":
      return theme.palette.error; // #e14856
    default:
      return theme.palette.primary;
  }
};

export const pushToast = ({
  type = "success",
  title,
  content,
  ...otherProps
}: Props) => {
  toast(content, {
    style: {
      fontFamily: theme.typography.fontFamily,
      direction: "rtl",
      color: getBackgroundColor(type).main,
      backgroundColor: getBackgroundColor(type).light,
      border: `1px solid ${getBackgroundColor(type).main}`,
    },
    ...otherProps,
  });
};
