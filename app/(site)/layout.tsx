import { AuthProvider } from "@/components/AuthProvider";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative flex flex-col min-h-screen">
        <SiteHeader />
        <div className="flex-1">{children}</div>
      </div>
      <TailwindIndicator />
    </>
  );
};

export default AppLayout;
