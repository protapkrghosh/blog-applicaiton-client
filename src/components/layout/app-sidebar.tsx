import * as React from "react";

import { SearchForm } from "@/components/layout/search-form";
import {
   Sidebar,
   SidebarContent,
   SidebarGroup,
   SidebarGroupContent,
   SidebarGroupLabel,
   SidebarHeader,
   SidebarMenu,
   SidebarMenuButton,
   SidebarMenuItem,
   SidebarRail,
} from "@/components/ui/sidebar";

const data = {
   navMain: [
      {
         title: "Getting Started",
         url: "#",
         items: [
            {
               title: "Write Blog",
               url: "/dashboard/write-blog",
            },
            {
               title: "Analytics",
               url: "/dashboard/analytics",
            },
         ],
      },
   ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
   return (
      <Sidebar {...props}>
         <SidebarHeader>
            <SearchForm />
         </SidebarHeader>
         <SidebarContent>
            {data.navMain.map((item) => (
               <SidebarGroup key={item.title}>
                  <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
                  <SidebarGroupContent>
                     <SidebarMenu>
                        {item.items.map((item) => (
                           <SidebarMenuItem key={item.title}>
                              <SidebarMenuButton asChild>
                                 <a href={item.url}>{item.title}</a>
                              </SidebarMenuButton>
                           </SidebarMenuItem>
                        ))}
                     </SidebarMenu>
                  </SidebarGroupContent>
               </SidebarGroup>
            ))}
         </SidebarContent>
         <SidebarRail />
      </Sidebar>
   );
}
