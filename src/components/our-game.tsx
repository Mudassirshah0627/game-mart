"use client";
import { memo } from "react";
import "../styles/our-game.css";
import Image from "next/image";
import { motion } from "framer-motion";

const OurGame = memo(function OurGame() {
  return (
    <div className="bg-[#2E2D2E] py-12 mt-6 rounded-3xl ">
      <div className="px-12">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5, x: -170 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="text-3xl font-bold  "
        >
          Our Games
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 70 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-4 text-lg text-white pb-4"
        >
          Step into a world where art meets blockchain technology. Our exclusive
          collection of non-fungible tokens (NFTs) showcases some of the most
          unique and stunning works of digital art from talented artists around
          the world. Each NFT is a one-of-a-kind creation, verified on the
          blockchain, and is sure to capture the attention of any collector or
          art enthusiast.
        </motion.div>
      </div>
      <div className="md:flex justify-between px-5 pb-32  md:h-screen  md:relative">
        <motion.div className=" first w-full md:w-[45%] xl:w-1/2  h-[60vh] md:h-[80vh] absolute left-4 xl:left-12  md:px-12 pb-3 bottom-32">
          <div className="h-[13rem] xl:w-[20rem] flex justify-center py-12">
            <Image
              src="/assets/Images/ourgame.png"
              alt="our game"
              width={600}
              height={300}
              className="h-full w-full"
            />
          </div>
          <motion.div className="absolute -bottom-4 sm:bottom-4">
            <h1 className="text-2xl font-bold text-white    ">Blops</h1>
            <p className="text-white text-sm pr-12 ">
              Blops are a unique and quirky collection of NFTs featuring bizarre
              ranks available: Blop, Blop Adv, Blop Super, and Blop Ultra, with
              increasing rarity and attributes as the rank increases. With a
              limited supply of 1000, Blops offer collectors a chance to own a
              rare and distinctive piece of digital art.
            </p>
            <button className="py-2 text-xl mt-4 px-12 bg-white text-primary shadow-md rounded-md">
              Play Now
            </button>
          </motion.div>
        </motion.div>
        <motion.div className="my-3 md:my-0 second w-full md:w-[45%] xl:w-1/2 h-[60vh] md:h-[80vh] absolute bottom-32 right-4 xl:right-12">
          <div className="flex flex-col  float-end w-full lg:w-[80%] px-12">
            <h1 className="text-2xl font-bold pt-6">Pixel Hero</h1>
            <p className="text-white text-sm ">
              xel Heroes is a card game NFT project built by an early Proton NFT
              creator. The project has been handed over to CrypFennecs for
              integration with the Bayra platform. The game features pixelated
              characters with various rarities, descriptions, attributes (HP,
              Armor, Strength, and Magic), and special abilities. The Pixel
              Heroes collection comp xel Heroes is a card game NFT project built
              by an early Proton NFT creator. The project has been handed
            </p>
            <button className="py-2 text-xl mt-4 px-12 bg-primary  shadow-md rounded-md">
              Play Now
            </button>
          </div>
          <div className="h-[13rem] md:w-[20rem] flex absolute right-8 md:right-0 -bottom-40  md:bottom-0 pt-4">
            <Image
              src="/assets/Images/ourgame(2).png"
              alt="our game"
              width={600}
              height={300}
              className="h-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default OurGame;
