"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, navbar } from "@heroui/react";
import { siteConfig } from "@/config/site.config";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RegistrationForm from "@/forms/registration.form";
import RegistrationModal from "./modals/registration.modal";
import { useState } from "react";
import LoginForm from "@/forms/login.form";
import LoginModal from "./modals/login.modal";

export const Logo = () => {
    return (
        <Image
            src="/logo phoenix.jpg"
            alt="Acme Logo"
            width={70}
            height={70}
            className="pt-2"
            priority
        />
    );
};

export default function Header() {

    const pathName = usePathname();

    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <Navbar className="h-[10vh]">
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
                    <Button 
                        as={Link} 
                        color="secondary"
                        href="#"
                        variant="flat"
                        onPress={() => setIsLoginOpen(true)}
                    >
                        Авторизация
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat" onPress={() => setIsRegistrationOpen(true)}>
                        Регистрация
                    </Button>
                </NavbarItem>
            </NavbarContent>
            <RegistrationModal
                isOpen={isRegistrationOpen}
                onClose={() => setIsRegistrationOpen(false)}
            />
            <LoginModal 
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
            />

        </Navbar>
    );
}