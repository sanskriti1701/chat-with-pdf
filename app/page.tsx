"use client"
import {
  BrainCogIcon, EyeIcon, GlobeIcon, MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon
} from "lucide-react";
import { Button } from "../components/ui/button.tsx";
import Link from "next/link";
import Image from "next/image";

const features = [
  {
    name: "Store your PDF Documents", description:
      "Keep all your important PDF files securely stored and easily accessible anytime, anywhere.", icon: GlobeIcon
  },
  {
    name: "Blazing Fast Responses", description: "Experience lightning-fast answers to your queries, ensuring you get the information you need instantly.",
    icon: ZapIcon
  },
  {
    name: "Chat Memorisation", description: "Our intelligent chatbot remembers previous interactions, providing a seamless and personalized experience.",

    icon: BrainCogIcon
  },
  {
    name: "Interactive PDF Viewer", description: "Engage with your PDFs like never before using our intuitive and interactive viewer.",
    icon: EyeIcon
  },
  {
    name: "Cloud Backup", description: "Keep your PDF documents safe and secure with our cloud backup feature.",
    icon: ServerCogIcon
  },
  {
    name: "Responsive Across Devices", description: "Access and chat with your PDFs seamlessly on any device, whether it's your desktop, tablet, or smartphone.",
    icon: MonitorSmartphoneIcon,
  }
]
export default function Home() {
  return (
    <main className="overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Your Interactive Documents Companion</h2>
            <p className="mt-2 text-3xl font-bold tracking-light text-gray-900 sm:text-6xl">Transform your PDFs into Interactive Conversations</p>
            <p>
              Introducing
              <span className="font-bold text-indigo-600"> Chat with PDF.</span>
              <br />
              <br /> Upload your documents, our chatbot will answer everything for you, Ideal for anyone, <span className="text-indigo-600"> Chat with PDF</span> turns static documents to <span className="font-bold">dynamic converstations</span>, enhancing productivity 10x fold effortlessly.
            </p>
          </div>
          <Button className="mt-10">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image alt="App screenshot" src="https://i.imgur.com/VciRSTI.jpeg" width={2432} height={1442} className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10" />
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md: mt-24 lg: px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 1g:max-w-none lg:grid-cols-3 lg: gap-x-8 lg: gap-y-16">
              {features?.map((feature, index) => (
                <div key={index} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900"><feature.icon className="w-6 h-6 text-indigo-600 absolute left-1 top-1 h-5 w-5 text-indigo-600" /></dt>
                  <dd>{feature?.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
    </main>

  );
}
