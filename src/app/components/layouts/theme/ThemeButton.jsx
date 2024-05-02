import { Popover, PopoverContent, PopoverTrigger } from "@/app/components/ui/popover.jsx";
import { Button } from "@/app/components/ui/button.jsx";
import { Paintbrush } from "lucide-react";
import { Drawer } from "vaul";
import { DrawerContent, DrawerTrigger } from "@/app/components/ui/drawer.jsx";
import ThemeCustomizer from "@/app/components/layouts/theme/ThemeCustomizer.jsx";

const ThemeButton = () => {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button className={"hidden md:inline-flex"} variant={"outline"} size={"icon"}>
            <Paintbrush className={"btn-icon"} />
          </Button>
        </PopoverTrigger>
        <PopoverContent align={"end"} className={"z-50 w-[340px] p-6"}>
          <ThemeCustomizer />
        </PopoverContent>
      </Popover>
      <Drawer.Root>
        <DrawerTrigger asChild>
          <Button className={"md:hidden"} variant={"outline"} size={"icon"}>
            <Paintbrush className={"btn-icon"} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className={"h-[85%] border p-6 pt-10"}>
          <ThemeCustomizer />
        </DrawerContent>
      </Drawer.Root>
    </>
  );
};

export default ThemeButton;
