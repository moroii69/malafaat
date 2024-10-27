'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHeader, TableRow, TableHead } from "@/components/ui/table";


type SubjectsData = {
    [key: string]: {
        [key: string]: {
            [key: string]: string[];
        };
    };
};
const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const periods = ['9:30 - 10:30', '10:30 - 11:30', '11:30 - 12:30', '12:30 - 1:30', '1:30 - 2:30', '2:30 - 3:30', '3:30 - 4:30'];

const subjectsData: SubjectsData = {
    CSE: {
      A: {
        Monday: ['PP LAB', 'PP LAB', 'PP LAB', 'LUNCH', 'OR', 'DECO', 'DS'],
        Tuesday: ['DV LAB', 'DV LAB', 'DV LAB', 'LUNCH', 'DM', 'DS', 'LIBRARY'],
        Wednesday: ['DECO', 'DM', 'OR', 'LUNCH', 'DS LAB', 'DS LAB', 'DS LAB'],
        Thursday: ['DM', 'PP', 'OR', 'LUNCH', 'PP', 'DECO', 'SPORTS'],
        Friday: ['OR', 'DS', 'DM(T)', 'LUNCH', 'NAMAZ', 'PP', 'C/M'],
        Saturday: ['DS', 'DECO', 'PP', 'LUNCH', 'DS', 'DM', 'PP'],
      },
      B: {
        Monday: ['DECO', 'OR', 'DS', 'LUNCH', 'PP LAB', 'PP LAB', 'PP LAB'],
        Tuesday: ['OR', 'DM', 'DS', 'LUNCH', 'DS', 'DECO', 'PP'],
        Wednesday: ['DS', 'PP', 'DM(T)', 'LUNCH', 'DV LAB', 'DV LAB', 'DV LAB'],
        Thursday: ['DS LAB', 'DS LAB', 'DS LAB', 'LUNCH', 'OR', 'DM', 'LIBRARY'],
        Friday: ['DM', 'OR', 'DECO', 'LUNCH', 'NAMAZ', 'PP', 'CM'],
        Saturday: ['PP', 'DM', 'PP', 'LUNCH', 'DECO', 'DS', 'SPORTS'],
      },
      C: {
        Monday: ['DV LAB', 'DV LAB', 'DV LAB', 'LUNCH', 'PP', 'DECO', 'DS'],
        Tuesday: ['PP LAB', 'PP LAB', 'PP LAB', 'LUNCH', 'OR', 'DM', 'LIBRARY'],
        Wednesday: ['OR', 'PP', 'DM', 'LUNCH', 'OR', 'DS', 'C/M'],
        Thursday: ['PP', 'OR', 'DECO', 'LUNCH', 'DS LAB', 'DS LAB', 'DS LAB'],
        Friday: ['DM', 'DECO', 'DS', 'LUNCH', 'NAMAZ', 'PP', 'DM(T)'],
        Saturday: ['DECO', 'DS', 'DM', 'LUNCH', 'DS', 'PP', 'SPORTS'],
      },
      D: {
        Monday: ['DECO', 'OR', 'DECO', 'LUNCH', 'DS', 'PP', 'DM(T)'],
        Tuesday: ['DS', 'DM', 'DECO', 'LUNCH', 'PP LAB', 'PP LAB', 'PP LAB'],
        Wednesday: ['OR', 'PP', 'DS', 'LUNCH', 'DM', 'DS', 'PP'],
        Thursday: ['DV LAB', 'DV LAB', 'DV LAB', 'LUNCH', 'DS', 'OR', 'C/M'],
        Friday: ['DS LAB', 'DS LAB', 'DS LAB', 'LUNCH', 'NAMAZ', 'DECO', 'LIBRARY'],
        Saturday: ['DM', 'PP', 'OR', 'LUNCH', 'DM', 'PP', 'SPORTS'],
      },
      E: {
        Monday: ['DM', 'DS', 'PP', 'LUNCH', 'OR', 'DM(T)', 'DS'],
        Tuesday: ['DECO', 'DS', 'OR', 'LUNCH', 'DM', 'DS', 'PP'],
        Wednesday: ['PP LAB', 'PP LAB', 'PP LAB', 'LUNCH', 'DECO', 'PP', 'C/M'],
        Thursday: ['PP', 'DECO', 'DM', 'LUNCH', 'DV LAB', 'DV LAB', 'DV LAB'],
        Friday: ['NULL', 'NULL', 'DECO', 'LUNCH', 'NAMAZ', 'DS', 'SPORTS'],
        Saturday: ['DS LAB', 'DS LAB', 'DS LAB', 'LUNCH', 'DM', 'OR', 'LIBRARY'],
      }
    }
  };
  
  const YourComponent = () => {
    useEffect(() => {
        console.log(subjectsData);
    }, []); 

    return null; 
};

export default function TimetablePage() {
    const [department, setDepartment] = useState<string>('');
    const [section, setSection] = useState<string>('');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const departments = ['CSE'] as const;

    
    type Department = typeof departments[number];

    
    const isDepartment = (value: string): value is Department => {
        return departments.includes(value as Department);
    };

    const sections = department && isDepartment(department) 
        ? Object.keys(subjectsData[department]) 
        : [];

    return (
        <div className="min-h-screen bg-white text-gray-900 font-sans">
            <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md z-10">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-semibold">
                        Malafaat
                    </Link>
                </div>
            </header>

            <main className="pt-20 pb-12">
                <section className="container mx-auto px-4 py-8">
                    <motion.h1
                        className="text-4xl font-bold mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Time Table
                    </motion.h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div>
                            <Label htmlFor="department">Department</Label>
                            <Select onValueChange={setDepartment}>
                                <SelectTrigger id="department">
                                    <SelectValue placeholder="Select department" />
                                </SelectTrigger>
                                <SelectContent>
                                    {departments.map(dept => (
                                        <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor="section">Section</Label>
                            <Select onValueChange={setSection} disabled={!department}>
                                <SelectTrigger id="section">
                                    <SelectValue placeholder="Select section" />
                                </SelectTrigger>
                                <SelectContent>
                                    {sections.map(sec => (
                                        <SelectItem key={sec} value={sec}>Section {sec}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {department && section && (
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Day / Time</TableHead>
                                        {periods.map((period, index) => (
                                            <TableHead key={index}>{period}</TableHead>
                                        ))}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {days.map((day) => (
                                        <TableRow key={day}>
                                            <TableCell className="font-medium">{day}</TableCell>
                                            {periods.map((_, periodIndex) => (
                                                <TableCell key={periodIndex}>
                                                    <div className="text-center font-medium">
                                                        {subjectsData[department]?.[section]?.[day]?.[periodIndex] ?? 'N/A'}
                                                    </div>
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    )}
                </section>
            </main>

            <footer className="bg-gray-100 py-8">
                <div className="container mx-auto px-4 text-center text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Malafaat. All rights reserved.</p>
                </div>
            </footer>
            <YourComponent /> {/* Render YourComponent here */}
        </div>
    );
}