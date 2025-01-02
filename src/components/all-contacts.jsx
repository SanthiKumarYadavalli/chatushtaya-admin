import { HoverEffect } from "./ui/card-hover-effect";
const data = [
  {
    name: "John Doe",
    description:
      "A freelance graphic designer specializing in branding and logo creation.",
    mobile: "+1-234-567-8901",
    whatsapp: "+1-234-567-8901",
    email: "john.doe@example.com",
  },
  {
    name: "Jane Smith",
    description:
      "An experienced web developer with expertise in full-stack development.",
    mobile: "+44-20-7946-0958",
    whatsapp: "+44-20-7946-0958",
    email: "jane.smith@example.co.uk",
  },
  {
    name: "Arun Kumar",
    description:
      "A digital marketer passionate about SEO and social media strategies.",
    mobile: "+91-9876543210",
    whatsapp: "+91-9876543210",
    email: "arun.kumar@example.in",
  },
  {
    name: "Maria Gonzalez",
    description:
      "A content writer focusing on creating engaging blog posts and articles.",
    mobile: "+34-612-345-678",
    whatsapp: "+34-612-345-678",
    email: "maria.gonzalez@example.es",
  },
  {
    name: "Chen Wei",
    description:
      "An AI researcher with a focus on computer vision and machine learning.",
    mobile: "+86-10-1234-5678",
    whatsapp: "+86-10-1234-5678",
    email: "chen.wei@example.cn",
  },
  {
    name: "Fatima Al-Mansoori",
    description:
      "A UI/UX designer dedicated to creating intuitive and user-friendly designs.",
    mobile: "+971-50-123-4567",
    whatsapp: "+971-50-123-4567",
    email: "fatima.mansoori@example.ae",
  },
  {
    name: "Liam O'Connor",
    description:
      "A software engineer with a strong background in cloud computing.",
    mobile: "+353-86-123-4567",
    whatsapp: "+353-86-123-4567",
    email: "liam.oconnor@example.ie",
  },
  {
    name: "Sofia Rossi",
    description:
      "A professional photographer with a passion for nature and landscapes.",
    mobile: "+39-333-123-4567",
    whatsapp: "+39-333-123-4567",
    email: "sofia.rossi@example.it",
  },
  {
    name: "Ahmed Hossain",
    description:
      "An entrepreneur with a focus on e-commerce and digital transformation.",
    mobile: "+880-1712-345678",
    whatsapp: "+880-1712-345678",
    email: "ahmed.hossain@example.com.bd",
  },
  {
    name: "Emily Davis",
    description:
      "A teacher and educational consultant specializing in online learning.",
    mobile: "+1-567-890-1234",
    whatsapp: "+1-567-890-1234",
    email: "emily.davis@example.com",
  },
];
import React, { useState, useEffect } from "react";
import { fetchContacts } from "@/backend/utils";

export default function CardHoverEffectDemo() {
  const [contacts, setContacts] = useState([]); // State to hold fetched contacts
  const [loading, setLoading] = useState(true); // State to handle loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const fetchedContacts = await fetchContacts();
        setContacts(fetchedContacts); // Update the state with fetched data
        setLoading(false); // Data fetching is complete
      } catch (err) {
        console.error("Failed to fetch contacts:", err);
        setError("Failed to load contacts.");
        setLoading(false); // End loading even if there's an error
      }
    };

    loadContacts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message if something goes wrong
  }

  return (
    <div className="mx-auto px-8">
      <HoverEffect items={contacts} />
    </div>
  );
}
