import { redirect } from "next/navigation";

export default function ManagerAlias() {
  // Preserve old link, but use the clear new location/label:
  redirect("/vendors/dashboard");
}
