import { permanentRedirect } from "next/navigation";
import { developerDocsUrl } from "@/lib/shell-nav";

export default function DevelopersPage() {
  permanentRedirect(developerDocsUrl);
}
