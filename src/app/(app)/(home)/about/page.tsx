import { Button } from "@/components/ui/button";
import {
  ContactIcon,
  Github,
  InboxIcon,
  UserCircleIcon,
} from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="lg:pt-16 pt-4 pb-4 px-4 lg:px-12">
      <div className="border border-black border-dashed flex items-center justify-center p-8 flex-col  bg-white w-full rounded-md ">
        <UserCircleIcon className="size-18 mb-5" />
        <p className="text-base font-bold">
          Hello, I&apos;m{" "}
          <span className="text-pink-400">Janmitsinh Panjrolia</span> — a full-stack
          developer passionate about building intuitive, beautiful web
          experiences using modern technologies like React, Node.js, and
          Tailwind CSS.
        </p>

        <p className="text-base mt-4">Follow me on socials</p>
        <div className="flex lg:flex-row gap-4 flex-col">
          <Button variant="elevated" className="mt-4">
            <Github className="size-5 mr-2" />
            <Link href="https://github.com/Janmitsinh">Github</Link>
          </Button>
        </div>

        <p className="text-base mt-4">Hire me</p>
        <div className="flex lg:flex-row gap-4 flex-col">
          <Button variant="elevated" className=" mt-4">
            <InboxIcon className="size-5 mr-2" />
            <Link href="mailto:janmitsinhpanjrolia@gmail.com">Mail Me</Link>
          </Button>
          <Button variant="elevated" className="mt-4">
            <ContactIcon className="size-5 mr-2" />
            <Link href="phoneto:+1 263-880-2726">Call me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
