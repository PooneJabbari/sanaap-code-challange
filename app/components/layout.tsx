import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="font-sans text-black-50 w-full h-svh overflow-hidden relative flex flex-col">
      <div className="h-52 rounded-b-2xl bg-primary absolute top-0 left-0 w-full" />
      <Outlet />
    </div>
  );
}
