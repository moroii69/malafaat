    'use client'

    import { useState } from 'react'
    import Link from 'next/link'
    import { motion } from 'framer-motion'
    import { ChevronRight, BookOpen, Clock, Upload } from 'lucide-react'
    import { Button } from "@/components/ui/button"
    import { Analytics } from "@vercel/analytics/react"
    import { SpeedInsights } from "@vercel/speed-insights/next"
    import Particles from "@/components/ui/particles";


    export default function HomePage() {
      const [hoveredSemester, setHoveredSemester] = useState<number | null>(null)

      return (

          <div className="min-h-screen bg-white text-gray-900 font-sans">
              <div
                  className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-2xl">
                  <Particles
                      className="absolute inset-0"
                      quantity={100}
                      ease={100}
                      color='blue'
                      refresh
                  />

                  <motion.div
                      className="mb-8 text-lg font-semibold text-blue-600"
                      initial={{opacity: 0, y: -20}}
                      animate={{opacity: 1, y: 0}}
                      transition={{duration: 0.6}}
                  >
                      Year 2 • CSE
                  </motion.div>
                  <motion.h1
                      className="text-5xl font-bold mb-6"
                      initial={{opacity: 0, y: 20}}
                      animate={{opacity: 1, y: 0}}
                      transition={{duration: 0.6}}
                  >
                      Your Academic Journey Starts Here
                  </motion.h1>
                  <motion.p
                      className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto"
                      initial={{opacity: 0, y: 20}}
                      animate={{opacity: 1, y: 0}}
                      transition={{duration: 0.6, delay: 0.2}}
                  >
                      Malafaat provides easy access to academic resources, helping you excel in your studies.
                  </motion.p>

                  <section className="container mx-auto px-4 py-16 text-center">

                      <motion.div
                          className="flex justify-center space-x-8"
                          initial={{opacity: 0, y: 20}}
                          animate={{opacity: 1, y: 0}}
                          transition={{duration: 0.6, delay: 0.4}}
                      >
                          {[3, 4].map((semester) => (
                              <Link
                                  key={semester}
                                  href={`/semester${semester}`} // Updated href
                                  onMouseEnter={() => setHoveredSemester(semester)}
                                  onMouseLeave={() => setHoveredSemester(null)}
                              >
                                  <Button
                                      variant="outline"
                                      className={`px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                                          hoveredSemester === semester ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-900'
                                      }`}
                                  >
                                      Semester {semester}
                                      <ChevronRight className={`ml-2 transition-transform duration-300 ${
                                          hoveredSemester === semester ? 'translate-x-1' : ''
                                      }`}/>
                                  </Button>
                              </Link>
                          ))}
                      </motion.div>
                  </section>
              </div>
              <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md z-10">
                  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                      <Link href="/" className="text-2xl font-semibold">
                          Malafaat
                      </Link>
                      <nav className="flex items-center space-x-6">
                          <Link href="/upload">
                              <Button variant="ghost">Upload</Button>
                          </Link>
                          <Link href="/time-table">
                              <Button variant="ghost">Time Table</Button>
                          </Link>
                          <Link href="https://blessed-viper-97.accounts.dev/user">
                              <Button variant="ghost">My Profile</Button>
                          </Link>
                          <Link href="favourites">
                              <Button variant="ghost">Favourites</Button>
                          </Link>
                      </nav>
                  </div>
              </header>

              <main className="pt-20 pb-12">
                  <Particles
                      className="absolute inset-0"
                      quantity={100}
                      ease={100}
                      color='black'
                      refresh
                  />

                  <section className="container mx-auto px-4 py-16">
                      <motion.h2
                          className="text-3xl font-bold mb-12 text-center"
                          initial={{opacity: 0, y: 20}}
                          animate={{opacity: 1, y: 0}}
                          transition={{duration: 0.6}}
                      >
                          Discover Malafaat
                      </motion.h2>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          {[
                              {
                                  icon: BookOpen,
                                  title: "Comprehensive Resources",
                                  description: "Access a wide range of academic materials to support your studies. (Coming Soon)",
                                  link: "/resources"
                              },
                              {
                                  icon: Clock,
                                  title: "Timetable",
                                  description: "Stay organized with your custom class schedule at your fingertips. (Coming Soon)",
                                  link: "/time-table"
                              },
                              {
                                  icon: Upload,
                                  title: "Contribute Knowledge",
                                  description: "Share your own resources and help fellow students succeed.",
                                  link: "/upload"
                              },
                          ].map((feature, index) => (
                              <motion.div
                                  key={index}
                                  className="bg-gray-50 p-8 rounded-2xl text-center transition-transform transform hover:-translate-y-2 hover:shadow-lg"
                                  initial={{opacity: 0, y: 20}}
                                  animate={{opacity: 1, y: 0}}
                                  transition={{duration: 0.6, delay: 0.2 * (index + 1)}}
                              >
                                  <a href={feature.link} className="block">
                                      <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-500"/>
                                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                      <p className="text-gray-600">{feature.description}</p>
                                  </a>
                              </motion.div>
                          ))}
                      </div>
                  </section>

              </main>
              <Particles
                  className="absolute inset-0"
                  quantity={100}
                  ease={100}
                  color='black'
                  refresh
              />

              <footer className="bg-gray-100 py-8">
                  <div className="container mx-auto px-4 text-center text-gray-600">
                      <p>&copy; {new Date().getFullYear()} Malafaat. All rights reserved.</p>
                  </div>
              </footer>

              <Analytics/>
              <SpeedInsights/>
          </div>


      )
    }
