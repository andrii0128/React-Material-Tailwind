import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import { Login } from "./Login";
import { Register } from "./Register";
 
export function Auth() {
  const data = [
    {
      label: "Sign In",
      value: "login",
      icon: LockClosedIcon,
      desc: <Login />,
    },
    {
      label: "Sign Up",
      value: "register",
      icon: UserCircleIcon,
      desc: <Register />,
    },
  ];
  return (
    <div className="container mx-auto my-12 px-12 py-10 sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[45%]">
      <Tabs value="login">
        <TabsHeader>
          {data.map(({ label, value, icon }) => (
            <Tab key={value} value={value}>
              <div className="flex items-center gap-2">
                {React.createElement(icon, { className: "w-5 h-5" })}
                {label}
              </div>
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}