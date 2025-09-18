import type { Route } from "./+types/phone-number";
import ExampleComponent from "../components/ExampleComponent";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function PhoneNumber() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-f6f8">
      <ExampleComponent />
    </div>
  );
}
