import { Button } from "@/app/components/ui/button.jsx";
import { Github } from "lucide-react";
import { ModeToggle } from "@/app/components/layouts/theme/ModeToggle.jsx";
import ThemeButton from "@/app/components/layouts/theme/ThemeButton.jsx";

const ButtonGroup = () => {
  return (
    <>
      <Button
        onClick={() => window.open("https://github.com/FalconiZzare/shadcn-x-three", "_blank")}
        variant={"outline"}
        size={"icon"}
      >
        <Github className={"btn-icon"} />
      </Button>
      <ModeToggle />
      <ThemeButton />
    </>
  );
};

export default ButtonGroup;
