import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Button asChild><Link href="/admin/dashboard">Click me!</Link></Button>
      <h1>Welcome to the page</h1>
    </div>
  );
}
