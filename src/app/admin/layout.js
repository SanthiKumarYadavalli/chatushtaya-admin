import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Breadcrumb } from "@/components/ui/breadcrumb";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main>
            <div className="flex flex-row items-center justify-center p-4">
              <img src="/rguktlogo.png" alt="Logo" className="w-20 h-20" />
              <pre>       </pre>
              <h1 className="text-[calc(60px)] font-bold text-gray-700">
                Krishna Admin Dashboard
              </h1>
            </div>

          <header
            className={`flex shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 w-full`}
          >
            <div className="flex items-center justify-between w-full">
              <SidebarTrigger className="ml-2" />
            </div>
          </header>
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
