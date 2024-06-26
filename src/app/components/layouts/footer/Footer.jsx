import Link from "next/link";

const Footer = () => {
  return (
    <div
      className={
        "z-50 mt-6 flex min-h-[40px] items-center justify-center border-t border-ring backdrop-blur-sm"
      }
    >
      <p
        className={"text-center text-xs font-light leading-tight text-muted-foreground sm:text-sm"}
      >
        Developed and maintained by&nbsp;
        <Link
          href={"https://github.com/FalconiZzare"}
          target={"_blank"}
          rel={"noreferrer"}
          className={"text-medium underline underline-offset-4"}
        >
          FalconiZzare
        </Link>
        . The source code is available on&nbsp;
        <Link
          href={"https://github.com/FalconiZzare/shadcn-x-three"}
          target={"_blank"}
          rel={"noreferrer"}
          className={"text-medium underline underline-offset-4"}
        >
          Github
        </Link>
        .
      </p>
    </div>
  );
};

export default Footer;
