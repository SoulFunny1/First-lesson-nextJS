"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, navbar } from "@heroui/react";
import { siteConfig } from "@/config/site.config";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Logo = () => {
    return (
        <Image
            src="/logo img.png"
            alt="Acme Logo"
            width={100}
            height={100}
            priority
        />
    );
};

export default function App() {

    const pathName = usePathname();

    


    return (
        <Navbar>
            <NavbarBrand>
                <Logo />
                <p className="font-bold text-inherit">{siteConfig.title}</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {

                    siteConfig.navigation.map(item => {
                        const isActive = item.href === pathName
                        return (
                            <NavbarItem isActive key={item.name}>
                                <Link aria-current="page" href={item.href} className={`px-3 py1 ${isActive ? "text-blue-300" : "text-black"}`}>
                                    {item.name}
                                </Link>
                            </NavbarItem>
                        )
                    })


                }

            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}