import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/shadcn/dropdown-menu";

import React, { ReactElement, ReactNode } from "react"; // Import ReactNode

interface menuDatatype {
  logo?: ReactNode;
  name?: string;
  shortcut?: string;
}

interface MenuCategory {
  label: string;
  data: menuDatatype[];
}

export function CustomDropDownMenu({
  data,
  menuClassName,
  menuItemClassName,
  children,
}: {
  data: MenuCategory[];
  menuItemClassName: string;
  menuClassName: string;
  children: ReactElement;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className={`divide-y ${menuClassName}`}>
        {data.map((category, itemIndex) => (
          <div key={category.label}>
            <DropdownMenuLabel>{category.label}</DropdownMenuLabel>

            <DropdownMenuGroup>
              {category.data.map((item) => (
                <React.Fragment key={item.name}>
                  <DropdownMenuItem className={`${menuItemClassName}`}>
                    <span className="text-xs">{item.logo}</span>
                    <span>{item.name}</span>
                    <DropdownMenuShortcut>{item.shortcut}</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </React.Fragment>
              ))}
            </DropdownMenuGroup>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
