import React, { useState, createContext } from "react";
import Sidebar, { SidebarItem } from "./sidebar";
import {
  LayoutDashboard,
  Home,
  StickyNote,
  Layers,
  Flag,
  Calendar,
  LifeBuoy,
  Settings,
} from "lucide-react";

const activeContext = createContext();

export default function SidebarCaps() {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <Sidebar>
      <SidebarItem
        icon={<Home size={20} />}
        text="Home"
        to="/dashboard"
        alert
        active={currentTab == 1 ? true : false}
        onClick={()=>setCurrentTab(1)}
      />
      <SidebarItem
        icon={<LayoutDashboard size={20} />}
        text="Dashboard"
        active={currentTab == 2 ? true : false}
        to="/dashboard"
        onClick={()=>setCurrentTab(2)}
      />
      <SidebarItem
        icon={<StickyNote size={20} />}
        to={"/attendance"}
        text="Attendance"
        active={currentTab == 3 ? true : false}
        onClick={()=>setCurrentTab(3)}
      />
      <SidebarItem
        icon={<Calendar size={20} />}
        to={"/students"}
        text="students"
        active={currentTab == 4 ? true : false}
        onClick={()=>setCurrentTab(4)}
      />
      
     
    </Sidebar>
  );
}
