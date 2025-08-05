"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import { Form } from "@heroui/react";

import { SearchIcon, GithubIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";

import NextLink from "next/link";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = () => setIsMenuOpen(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const queryTerm = form.search.value.trim();

    if (queryTerm) {
      router.push(`/search?q=${encodeURIComponent(queryTerm)}`);
    }

    form.reset(); // Clear the input
  };

  const searchInput = (
    <Form onSubmit={handleSubmit}>
      <Input
        aria-label="Search"
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        name="search"
        labelPlacement="outside"
        placeholder="Search..."
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        type="search"
      />
    </Form>
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" isMenuOpen={isMenuOpen}
  onMenuOpenChange={setIsMenuOpen}>
      {/* Brand */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit text-xl">Cinemate</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Nav Links */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Desktop Search + Theme Switch */}
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <ThemeSwitch className="hidden lg:flex" />
      </NavbarContent>

      {/* Mobile Toggle Button */}
      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={handleMenuToggle}
        />
      </NavbarContent>

      {/* Mobile Menu Content */}
      <NavbarMenu>
        <div className="px-4 mt-4">{searchInput}</div>
        <div className="mx-4 mt-6 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                size="lg"
                href={item.href}
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
