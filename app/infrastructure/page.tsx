"use client";

import { motion } from "framer-motion";
import { Card, CardContent, Link, Typography } from "@mui/material";
import { ArrowLeft } from "lucide-react";

export default function InfrastructurePage() {

    
  const machines = [
    {
      src: "/BOX STICHING MACHINE.mp4",
      title: "BOX STICHING MACHINE",
      description:
        "Suitable for pinning corrugated boards. The machine is available in angular/straight model and the arms can be adjusted as per requirement.",
    },
    {
      src: "/52 “Double Profile High Speed Bearing Mounted Single Face Paper Corrugated Machine. - Copy.mp4",
      title:
        "52” Double Profile High Speed Bearing Mounted Single Face Paper Corrugated Machine",
      description:
        "Durable packaging for all industries. Widely used in shipping & logistics.",
    },
    {
      src: "/HIGH SPEED ROTARY SHEET CUTTER MACHINE.mp4",
      title: "HIGH SPEED ROTARY SHEET CUTTER MACHINE",
      description:
        "Suitable for cutting reel into sheets and 2 ply corrugated liners. Fitted with PIV gear box for cutting lengths, variable speed pulley and conveyor for sheets.",
    },
    {
      src: "/OBLIQUE TYPE SINGLE FACE PAPER CORRUGATING MACHINE1.mp4",
      title: "OBLIQUE TYPE SINGLE FACE PAPER CORRUGATING MACHINE",
      description:
        "Converts paper into corrugated 2ply rolls. Comes with flute rolls, self-loading reel stand, and reel shaft.",
    },
    {
      src: "/SHEET PASTING MACHINE.mp4",
      title: "SHEET PASTING MACHINE",
      description:
        "Glues the fluted side of the liner/Board for making 3,5,7,9 & 11 ply. Includes feeding table, delivery stick, and paste tray.",
    },
    {
      src: "/SINGLE side flex printing machine.mp4",
      title: "SINGLE SIDE FLEX PRINTING MACHINE",
      description: "Economical, reliable design. Easy to assemble and stack.",
    },
    {
      src: "/slotting machine.mp4",
      title: "Slotting Machine",
      description:
        "Converts paper into corrugated 2ply rolls. Fitted with flute rolls and self-loading reel stand.",
    },
    {
      src: "/Thin Blade Cutting and Creasing Machine.mp4",
      title: "Thin Blade Cutting and Creasing Machine",
      description:
        "Ensures sharp slitting, smooth edges, and original press lines. Used in corrugated board production lines.",
    },
    {
      src: "/SINGLE COLOR FLEEX.mp4",
      title: "SINGLE COLOUR FLEXO PRINTING MACHINE",
      description:
        "Prints corrugated boards with chromed cylinder, anilox rollers, digital counter, and variable speed motor.",
    },
    {
      src: "/HEVY DUTY.mp4",
      title: "HEAVY DUTY DIE PUNCHING EMBOSSING & CREASING MACHINE",
      description:
        "Punches papers, boards, and corrugated sheets. Includes clutch, timer control, lubrication, and delivery table.",
    },
    {
      src: "/BOARD CUTTER.mp4",
      title: "BOARD CUTTER",
      description:
        "Cuts paper, corrugated liners & boards. Perfectly balanced blade for smooth cutting with guides.",
    },
    {
      src: "/OBLIQUE TYPE SINGLE FACE PAPER CORRUGATING MACHINE.mp4",
      title: "Made In India",
      description:
        "Economical, reliable design. Easy to assemble and stack.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Infrastructure
      </h2>
      {/* Featured single video */}
      {machines[0] && (
        <div className="max-w-6xl mx-auto mb-10 rounded-lg overflow-hidden shadow-lg">
          <video
            src={machines[0].src}
            controls
            className="w-full h-[420px] object-cover bg-black"
          />
          <div className="p-4 bg-white">
            <h3 className="font-bold text-lg">{machines[0].title}</h3>
            <p className="text-sm text-gray-700">{machines[0].description}</p>
          </div>
        </div>
      )}
     {/* Back Button */}
{/* Back Button */}
<Link
  href="/"
  className="inline-flex items-center no-underline text-black hover:text-black [&_*]:text-black mb-12 px-4 py-2"
>
  <ArrowLeft className="h-5 w-5 mr-2" />
  <span>Back to Home</span>
</Link>

      {/* Grid with 2 columns on md+ screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {machines.map((machine, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              sx={{
                width: "100%",
                height: 400,
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                boxShadow: 4,
                overflow: "hidden",
              }}
            >
              {/* Video */}
              <video
                src={machine.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-64 object-cover"
              />

              {/* Description */}
              <CardContent
                sx={{
                  flexGrow: 1,
                  bgcolor: "#374151", // gray-700
                  color: "white",
                }}
              >
                <Typography fontWeight="bold" color="white">
                  {machine.title}
                </Typography>
                <Typography variant="body2" color="white">
                  {machine.description}
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
