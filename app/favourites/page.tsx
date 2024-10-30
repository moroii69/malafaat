'use client'

import { useState } from 'react'
import Link from "next/link";
import {motion} from "framer-motion";
import {Mail, Phone, Star} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card";


export default function FavouritesPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    //favourite subjects list (later to be added as the user favourites...
    const favouriteSubjects = [
        { text: "SUB 1", href: "www.example.com"},
        { text: "SUB 2", href: "www.example.com"},
        { text: "SUB 3", href: "www.example.com"},
        { text: "SUB 3", href: "www.example.com"},
        { text: "SUB 4", href: "www.example.com"},
        { text: "SUB 5", href: "www.example.com"},
        { text: "SUB 6", href: "www.example.com"},
        { text: "SUB 7", href: "www.example.com"},
        { text: "SUB 8", href: "www.example.com"},
        { text: "SUB 9", href: "www.example.com"}
    ]

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
            <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md z-10">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="https://malafaat.vercel.app/" className="text-2xl font-semibold">
                        Malafaat
                    </Link>
                </div>
            </header>


            <main className="flex-grow flex items-center justify-center px-4">
                <div className="text-center max-w-2xl mx-auto">
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}
                    >
                        <Star className="w-24 h-24 mx-auto text-blue-500 mb-6"/>
                        <h1 className="text-4xl font-bold mb-4">Your Favourites</h1>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                    >
                        <p className="text-xl text-gray-600 mb-8">
                            Access the resources you marked as favourite for frequent usage.
                        </p>
                        <p className="text-lg font-semibold mb-8">
                            Select one of the given below options
                        </p>

                        <div
                            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                                <DialogTrigger asChild>
                                    <Button className="flex items-center">
                                        View Saved Favourites
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Contact Admin</DialogTitle>
                                        <DialogDescription>
                                            You can reach out to the admin via WhatsApp or email.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="py-4">
                                        <div className="flex items-center mb-4">
                                            <Phone className="mr-2 h-4 w-4"/>
                                            <p>WhatsApp: +91 81257 09785</p>
                                        </div>
                                        <div className="flex items-center">
                                            <Mail className="mr-2 h-4 w-4"/>
                                            <p>Email: kurosen930@gmail.com</p>
                                        </div>
                                    </div>
                                </DialogContent>
                            </Dialog>

                            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                                <DialogTrigger asChild>
                                    <Button className="flex items-center">
                                        Edit Favourites
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[520px]">
                                    <DialogHeader>
                                        <DialogTitle>Viewing Saved Favourites</DialogTitle>
                                        <DialogDescription>
                                            These are the resources you have saved as favourites
                                        </DialogDescription>
                                    </DialogHeader>
                                    <Carousel
                                        opts={{
                                            align: "start",
                                        }}
                                        className="w-full max-w-sm"
                                    >
                                        <CarouselContent>
                                            {favouriteSubjects.map((item, index) => (
                                                <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/2">
                                                    <div className="p-1">
                                                        <Card>
                                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-l font-semibold">
                                                                    {item.text}
                                                                </a>
                                                            </CardContent>
                                                        </Card>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>
                                </DialogContent>
                            </Dialog>


                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    )
}
