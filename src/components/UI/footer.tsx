"use client"
import { siteConfig } from "@/config/site.config";
export default function Footer(){
    return(
        <footer className="flex items-center justify-center h-[10vh] bg-black">
            <p className="text-white">{siteConfig.description} (c) 2025</p>
          </footer>
    )
}