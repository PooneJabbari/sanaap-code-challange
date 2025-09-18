"use client";

import type { FC, PropsWithChildren } from "react";

import { Toaster as BaseToastContainer, toast } from "sonner";

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
  type?: "primary" | "secondary" | "success" | "warning" | "error" | "info";
} & ToastProps;

export const pushToast = ({
  type = "primary",
  title,
  content,
  ...otherProps
}: Props) => {
  toast(content, { ...otherProps });
};
