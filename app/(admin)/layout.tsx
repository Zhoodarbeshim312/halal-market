import LayoutBar from "@/components/layout/LayoutBar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutBar>{children}</LayoutBar>;
}
