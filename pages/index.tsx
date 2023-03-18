import type { NextPage } from "next";
import { useEffect, useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import { useRouter } from "next/router";
import Layout from "../components/Layout";

import Header from "../components/Header";

import { Zoom, Bounce, Fade, Roll } from "react-reveal";
import ai from "../public/images/ai.webp";
import about2 from "../public/images/about.webp";
import why from "../public/images/why.webp";
import logo from "../public/images/logo.webp";
import logo2 from "../public/images/logo.webp";
import bg2 from "../public/images/bg2.webp";
import dot from "../public/images/dot.webp";

// import Snout  from "../public/images/Snout .jpg";
import { Link, animateScroll as scroll } from "react-scroll";
import ParticlesBg from "../components/particles";
import p1 from "../public/images/p1.png";
import p3 from "../public/images/p3.png";
import p4 from "../public/images/p4.png";
import p5 from "../public/images/p5.png";
import p6 from "../public/images/p6.png";
import p7 from "../public/images/p7.png";
import p8 from "../public/images/p8.png";
import p10 from "../public/images/p10.png";
import buyimg from "../public/images/buy.png";
import tokenimg from "../public/images/token.png";
import work from "../public/images/work.svg";
import create from "../public/images/create.svg";
import web3 from "../public/images/web3.svg";
import business from "../public/images/business.svg";
import content from "../public/images/content.svg";
import other from "../public/images/other.svg";
import { BsTelegram, BsTwitter, BsMedium } from "react-icons/bs";
import {
  GiReceiveMoney,
  GiTakeMyMoney,
  GiCampfire,
  GiRoad,
} from "react-icons/gi";
import { BiDna } from "react-icons/bi";
import { FaCoins, FaChartBar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BsShopWindow, BsCloudSunFill } from "react-icons/bs";
import { MdPool, MdWaterfallChart, MdSwapVert } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { TbBrandTelegram, TbBrandTwitter } from "react-icons/tb";
import "react-vertical-timeline-component/style.min.css";

const Home: NextPage = () => {
  const router = useRouter();

  const list = [
    ["Home", null],

    ["About", null],

    ["Tokenomics", null],
    ["Roadmap", null],
    ["Uniswap", "https://app.uniswap.org"],
    [
      "Dextools",
      "https://www.dextools.io/app/en/ether/pair-explorer/0xc762aed51d7b07d08ee040e2eb4aece5bec4c7f5",
    ],
  ];
  const roadmap = [
    {
      title: "PHASE 1",
      desc: [
        " Contract Deployment",
        "Liquidity Acquisition",
        "Website Live",
        "Dextools Update",
        "$SNOUT Detective bot",
        "First Buybacks Initiated",
        "Litepaper Release",
        "Launch Marketing",
      ],
    },
    {
      title: "PHASE 2",

      desc: [
        "Staking Dapp",
        "CG and CMC Applied",
        "Hot Wallet tracker Dapp",
        "Blog posts pushed",
        "NFT Release ",
        " Marketing Push",
        "First AMA with Team",
        "Billboards (Vegas, NY)",
        "CEX",
      ],
    },
    {
      title: "PHASE 3",

      desc: [
        "Partnerships",
        "Huge Marketing Campaign",
        "Trending",
        "Influencer module Application",
      ],
    },
  ];
  const moreFeatures = [
    {
      title: "Potential for high returns",
      icon: <GiTakeMyMoney size={40} />,
    },

    {
      title: "Strong community support",
      icon: <IoIosPeople size={40} />,
    },
    {
      title: "Early mover advantage",
      icon: <BsCloudSunFill size={40} />,
    },
    {
      title: "Clearly Defined Roadmap",
      icon: <GiRoad size={40} />,
    },
  ];

  const tokenomics = [
    { option: "Name", value: "Snout " },
    { option: "Symbol", value: "$Snout " },
    { option: "Chain", value: "Ethereum" },
    { option: "Initial Supply", value: "1 Trillion" },

    { option: "Two Pools", value: "ETH & USDC" },
    {
      option: "Contract Address",
      value: "0x6d125ECC7B11E89708C13B1861e92446C8C8c9FA",
    },
  ];
  const reward = [
    {
      title: "Supply -  1 Million",
      desc: "The tax charged for both buy and sell transactions is 5%",
      icon: <FaCoins size={40} />,
    },
    {
      title: "Tax - 5/5",
      desc: "The tax charged for both buy and sell transactions is 5%",
      icon: <GiReceiveMoney size={40} />,
    },
    {
      title: "LP - 1%",

      desc: "1% fees is used to ensure that there are funds to support trading activity.",
      icon: <MdPool size={40} />,
    },
    {
      title: "Marketing - 4%",

      desc: "4% fees directly goes to marketing to support the token in a long run.",
      icon: <BsShopWindow size={40} />,
    },
  ];
  const features = [
    {
      title: "$SNOUT Detective bot",
    },
    {
      title: "$SNOUT Dapp's",
    },
    {
      title: "Staking ",
    },
    {
      title: "NFT'S",
    },
  ];
  const buy = [
    {
      title: "1",

      desc: "Download & setup MetaMask or TrustWallet",
    },
    {
      title: "2",

      desc: "Buy & send ETH to Metamask or Trust wallet",
    },
    {
      title: "3",

      desc: "Head over to Uniswap to buy your $Snout ",
    },
    {
      title: "4",

      desc: "View Snout  in your wallet and lastly HODL",
    },
  ];
  const about = [
    "register and add location(confirm before they own meme coins like Shiba, Doge etc.)",
    "Choose their own pets (+ beautiful NFT)",
    "Communicate and play together",

    "Grow and to make better their pets. More they active, more they can get $SHIMCO rewards   ",
  ];
  return (
    <div>
      <Header />
      <Layout>
        {/* <Header /> */}
        <section
          className=" md:h-[calc(100vh)]  mb-0 pb-0 w-full bg-inherit  md:py-0 bg-contain bg-no-repeat bg-top md:bg-right relative"
          style={{ backgroundImage: "url('images/bg.webp')" }}
          id="Home"
        >
          <ParticlesBg />
          <div className="h-full flex relative flex-col overflow-y-hidden items-center justify-center md:justify-around md:flex-row-reverse   md:gap-2 md:items-center  w-full md:px-24 md:pt-8 md:pb-0 pt-20 pb-20 ">
            <div className="w-full md:w-1/2  md:block z-20 drop-shadow-2xl">
              <ExportedImage
                src={logo}
                alt="illustration"
                layout="responsive"
                className=" "
              />
            </div>
            <div className="w-1/2 md:w-1/5 block left-0  absolute bottom-0 z-0 ">
              <ExportedImage
                src={dot}
                alt="illustration"
                layout="responsive"
                className=" "
              />
            </div>
            <div className="md:flex flex-col justify-center z-20 items-center md:items-start md:pt-0  px-6 md:p-3 w-full md:w-1/2">
              <Bounce>
                <h3
                  className="hidden md:block font-extrabold text-8xl md:text-9xl  text-white my-1  font-[Montserrat] bg-secondary md:text-left z-30 text-transparent bg-clip-text bg-contain "
                  // style={{ backgroundImage: "url('images/pattern.jpg')" }}
                >
                  Snout
                </h3>
                <p className=" md:text-xl  text-xl font-extrabold text-red-500 md:text-white font-[Montserrat]  md:text-start">
                  Join the Snout community today and start sniffing out the best
                  investment opportunities in the world of digital assets.
                </p>

                <div className="flex flex-col md:flex-row  items-start  gap-2 md:mb-0 my-3 md:my-0 md:mt-6">
                  <button
                    onClick={() =>
                      (window.location.href = "https://uniswap.org")
                    }
                    className="flex items-center justify-between gap-3 font-[Montserrat] font-extrabold text-xl bg-gradient-to-tr from-primary to-secondary hover:scale-105 transition-all  text-white p-4 md:p-5 px-10 rounded-3xl w-fit  border-none  "
                  >
                    Buy Now <MdSwapVert size={30} />
                  </button>

                  <button
                    onClick={() =>
                      (window.location.href =
                        "https://www.dextools.io/app/en/ether/pair-explorer/0xc762aed51d7b07d08ee040e2eb4aece5bec4c7f5")
                    }
                    className="flex items-center justify-between gap-3 font-[Montserrat] font-extrabold text-xl  bg-gradient-to-r from-blue-300 to-green-400 hover:scale-105 transition-all  text-white p-4 md:p-5 px-10 rounded-3xl w-fit  border-none"
                  >
                    View Chart <MdWaterfallChart size={30} />
                  </button>
                </div>
              </Bounce>
              {/* <div
                className="text-gray-200 text-center gap-2 flex items-center cursor-copy bg-bg1 w-fit bg-opacity-40 my-3 p-1 text-sm font-bold rounded break-all"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "0xfEdCECDB9e447edd067AACA2E1e7af36c6eAD5f3"
                  );
                }}
              >
                <FaCopy />
                0xfEdCECDB9e447edd067AACA2E1e7af36c6eAD5f3
              </div> */}
            </div>
          </div>
        </section>
        <p className="break-all text-red-500 font-bold text-center p-5 mt-7">
          <span className="text-xl ">Contract Address</span>
          <br />
          <br />
          0xF965148De72a633e16f3A9D72C5ca083593B7F22
        </p>
        <section
          className="md:min-h-[calc(100vh-64px)] flex flex-col justify-center  pt-16 items-center p-6 md:p-12 md:py-40 w-full bg-[#020873] bg-opacity-5"
          id="About"
          // style={{ backgroundImage: "url('images/background2.gif')" }}
        >
          <div className="flex flex-col  items-center md:px-12 justify-center relative  md:gap-10">
            {/* <Zoom>
              <div className="w-full md:w-2/5 ">
                <ExportedImage
                  src={about2}
                  alt="illustration"
                  layout="responsive"
                  className=""
                />
              </div>
            </Zoom> */}
            <div className="w-full md:w-1/2 block opacity-30 absolute  z-0 ">
              <ExportedImage
                src={bg2}
                alt="illustration"
                layout="responsive"
                className=" "
              />
            </div>
            <Zoom>
              <div className="flex flex-col items-center  py-5 md:w-1/2  transition-all duration-500 h-full md:hover:border-none">
                <h4 className=" md:text-2xl text-center   text-xl font-bold text-red-500 ">
                  <br />
                  {`A complete decentralized token.The $SNOUT is the most sensitive part of a dog.We are devoted to analyse safe projects and hot tracked wallets 
#SNOUT is going to be a key player in the crypto space developing multiply utility's `}
                  <br />
                </h4>
              </div>
            </Zoom>
            <h3 className="text-center text-3xl md:text-5xl mt-7  w-fit p-1 font-extrabold  text-red-500  font-[Montserrat]">
              Features
            </h3>

            <div className="flex flex-col md:flex-row   justify-center w-full items-center gap-5 md:gap-6 my-5 ">
              {features.map((item, index) => (
                <Zoom key={index}>
                  <div className="p-1 bg-gradient-to-t w-full  from-primary to-secondary rounded-lg">
                    <div className="group px-8   h-fit  flex flex-col justify-center items-center bg-bg1 bg-opacity-95 rounded-lg">
                      <h3 className=" font-[Montserrat]  z-10 text-xl  font-extrabold my-3 text-center border-gray-300 text-red-500 self-center ">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Zoom>
              ))}
            </div>
          </div>
        </section>

        <section
          className="flex flex-col justify-center items-center p-6 md:p-12  w-full bg-bg2 bg-opacity-40 bg-cover bg-right md:bg-fixed py-16"
          id=""
          // style={{ backgroundImage: "url('images/background.webp')" }}
        >
          <Fade>
            <h3 className="text-center text-5xl md:text-7xl mb-7  w-fit p-1 font-extrabold  text-red-500  font-[Montserrat]">
              Why join us?
            </h3>
          </Fade>
          <div className="md:flex flex-col items-center justify-center">
            {/* <div className="flex p-2 flex-col items-center md:w-2/3">
              <div className="flex flex-col gap-1 ">
                <div className="flex  items-center justify-center flex-row gap-2 flex-wrap">
                  {tokenomics.map((item, index) => (
                    <Zoom  key={index}>
                      <h3 className="flex text-white rounded-lg item-center  justify-center bg-bg2 p-3  bg-opacity-90 w-fit border-2 border-solid border-grad ">
                        <span className="text-center  flex flex-col items-center   break-all">
                          <span className="font-bold  text-xl ">
                            {item.option}
                          </span>{" "}
                          {item.value}
                        </span>
                      </h3>
                    </Zoom>
                  ))}
                </div>
              </div>
            </div> */}
            <div className="md:flex flex-col justify-center items-center">
              <div className="flex  md:flex-row flex-wrap justify-center w-full md:w-4/5 items-center gap-5 md:gap-6 my-5 ">
                {moreFeatures.map((item, index) => (
                  <Zoom key={index}>
                    <div className="p-1 w-[45%] md:w-1/3  bg-gradient-to-t from-primary to-secondary rounded-lg animate-pulse">
                      <div className="group p-8 md:py-12 w-full  flex flex-col justify-center items-center bg-bg1 bg-opacity-95 hover:shadow-2xl transition-all duration-700 hover:shadow-secondary shadow-md shadow-secondary rounded-lg">
                        <div className=" p-4  rounded-full  bg-bg2 bg-opacity-40 self-center text-red-500">
                          {/* <ExportedImage
                          src={item.icon}
                          alt="illustration"
                          layout="responsive"
                          className="   border-secondary border-2 border-solid animate-pulse"
                        /> */}
                          {item.icon}
                        </div>

                        <h3 className=" font-[Montserrat]  z-10  my-3 text-center border-gray-300 text-red-500 font-bold self-center ">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </Zoom>
                ))}
              </div>
              <button
                onClick={() =>
                  (window.location.href = "https://t.me/SnoutToken")
                }
                className="flex items-center my-5 justify-between gap-3 animate-pulse font-[Montserrat] font-extrabold text-xl bg-gradient-to-tr from-primary to-secondary hover:scale-105 transition-all  text-white p-4 md:p-5 px-10 rounded-3xl w-fit  border-none   "
              >
                Join Telegram <TbBrandTelegram size={30} />
              </button>
            </div>
          </div>
        </section>

        {/* <section
          className="px-6 md:px-20 py-16 md:py-24 w-full bg-inherit"
          id=""
        >
          <Fade >
            <h3 className="text-center w-full text-2xl md:text-3xl mb-7   p-1 font-extrabold  text-white  font-[Montserrat]">
              Snout  Developments
            </h3>
          </Fade>
          <div className="flex flex-col md:flex-row justify-center gap-4  flex-wrap items-start w-full py-7 text-zinc-50">
            {moreFeatures.map((item, index) => (
              <div
                key={index}
                className="lg:w-[20%] md:w-2/5  p-2 border-zinc-700 border-l border-solid rounded-lg border-opacity-40  px-6 group"
              >
                <div className=" my-3 text-zinc-400 border-zinc-400  group-hover:text-primary rounded-full group-hover:border-primary border-4 shadow-lg group-hover:shadow-primary border-solid w-fit p-2 transition-all duration-700">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-lg font-bold mb-3 font-[Montserrat]">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base">{item.content}</p>
              </div>
            ))}
          </div>
        </section> */}
        <section
          className="flex flex-col justify-center items-center p-6 md:p-12  w-full bg-bg2 bg-opacity-40 bg-cover bg-right md:bg-fixed py-16"
          id="Tokenomics"
          // style={{ backgroundImage: "url('images/background.webp')" }}
        >
          <Fade>
            <h3 className="text-center text-5xl md:text-7xl mb-7  w-fit p-1 font-extrabold  text-red-500  font-[Montserrat]">
              Token Info
            </h3>
          </Fade>
          <div className="md:flex flex-col items-center justify-center">
            {/* <div className="flex p-2 flex-col items-center md:w-2/3">
              <div className="flex flex-col gap-1 ">
                <div className="flex  items-center justify-center flex-row gap-2 flex-wrap">
                  {tokenomics.map((item, index) => (
                    <Zoom  key={index}>
                      <h3 className="flex text-white rounded-lg item-center  justify-center bg-bg2 p-3  bg-opacity-90 w-fit border-2 border-solid border-grad ">
                        <span className="text-center  flex flex-col items-center   break-all">
                          <span className="font-bold  text-xl ">
                            {item.option}
                          </span>{" "}
                          {item.value}
                        </span>
                      </h3>
                    </Zoom>
                  ))}
                </div>
              </div>
            </div> */}
            <div className="md:flex flex-col justify-center items-center">
              <div className="flex flex-col   flex-wrap justify-center w-full items-center gap-5 md:gap-6 my-5 ">
                {reward.map((item, index) => (
                  <Zoom key={index}>
                    <div className="p-1 bg-gradient-to-t w-full  from-primary to-secondary rounded-lg">
                      <div className="group px-8   h-fit  flex flex-col justify-center items-center bg-bg1 bg-opacity-95 rounded-lg">
                        <h3 className=" font-[Montserrat]  z-10 text-xl  font-extrabold my-3 text-center border-gray-300 text-red-500 self-center ">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </Zoom>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* <section
          className="p-6 md:p-12 py-16 w-full bg-gradient-to-r from-bg2 to-bg1  flex flex-col items-center bg-cover bg-right md:bg-fixed relative "
          id="Roadmap"
          // style={{ backgroundImage: "url('images/background.webp')" }}
        >
          <Fade>
            <h3 className="text-2xl md:text-3xl mb-10  text-center w-full  font-extrabold  text-zinc-50 font-[Montserrat]">
              Roadmap
            </h3>
          </Fade>

          <div className="flex flex-col justify-center w-full md:w-[60%]  md:items-end items-center  md:gap-6  ">
            {roadmap.map((item, index) => (
              <Fade key={index}>
                <div className="group  md:px-8 w-full  md:w-1/2 md:even:self-start md:my-4   flex flex-col items-center justify-start bg-opacity-60 md:pl-9 border-l border-dashed border-gray-100 md:even:border-l-0 md:even:border-r relative before:h-5 before:w-5 before:rounded-full before:bg-secondary before:absolute before:top-0 even:before:right-[97%]  odd:before:left-[-10px]  md:even:before:right-[-10px]">
                  <div className=" ml-5 mb-5 md:mb-0 md:ml-0  p-2 w-11/12 md:w-fit  ">
                    <h3 className="z-10  text-xl font-[Montserrat]  md:text-2xl  font-bold mt-3 text-left  text-zinc-200 ">
                      {item.title}
                    </h3>

                    <div className=" text-lg  text-zinc-200 z-10  p-3  md:px-0 md:p-0">
                      {item.desc.map((item, index) => (
                        <div
                          className="my-1 flex items-center gap-1"
                          key={index}
                        >
                          <span className="  text-zinc-3s00 text-sm">
                            - {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </section> */}
        <section
          className="p-6 md:p-12 py-12 w-full bg-bg2 flex flex-col items-center bg-cover bg-right md:bg-fixed"
          id="Roadmap"
          // style={{ backgroundImage: "url('images/background.webp')" }}
        >
          <Fade>
            <h3 className="text-center text-5xl md:text-7xl mb-12  w-fit p-1 font-extrabold  text-red-500">
              Roadmap
            </h3>
          </Fade>

          <div className="flex flex-col md:flex-row justify-center w-full md:items-start items-start gap-5 md:gap-6  ">
            {roadmap.map((item, index) => (
              <Fade key={index}>
                <div className="  group py-8 px-5 md:pb-12 w-full  md:h-80  flex flex-col items-center justify-center md:justify-start bg-opacity-60">
                  <h3 className=" z-10   text-xl  font-extrabold my-3 text-center  w-fit text-red-500">
                    {item.title}
                  </h3>
                  {/* <h3 className="font-[Poppins] z-10   text-3xl  font-extrabold my-3 text-center  text-white group-hover:text-white self-center">
                    {item.sub}
                  </h3> */}

                  <div className=" text-sm  text-red-500 z-10">
                    {item.desc.map((item, index) => (
                      <div
                        className="my-1 flex items-center justify-center text-center gap-1"
                        key={index}
                      >
                        <span className=" w-[95%]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </section>
        <section
          className="md:min-h-[calc(100vh-64px)] flex flex-col justify-center  pt-16 items-center p-6 md:p-12 md:py-40 w-full bg-[#020873] bg-opacity-5"
          id=""
          // style={{ backgroundImage: "url('images/background2.gif')" }}
        >
          <Fade>
            <h3 className="text-center text-5xl md:text-7xl mb-7  w-fit p-1 font-extrabold  text-red-500  font-[Montserrat]">
              Join the Snout Army
            </h3>
          </Fade>
          <div className="flex flex-col items-center md:px-12 justify-center relative  md:gap-10">
            <Zoom>
              <div className="w-full md:w-full ">
                <ExportedImage
                  src={about2}
                  alt="illustration"
                  layout="responsive"
                  className=""
                />
              </div>
            </Zoom>
            <div className="w-full  block opacity-30 absolute  z-0 ">
              <ExportedImage
                src={bg2}
                alt="illustration"
                layout="responsive"
                className=" "
              />
            </div>
            <Zoom>
              <div className="flex flex-col items-center  py-5 w-full  transition-all duration-500 h-full md:hover:border-none">
                <div className="flex flex-col md:flex-row  items-center justify-center w-full  gap-2 md:mb-0 my-3 md:my-0 md:mt-6">
                  <button
                    onClick={() =>
                      (window.location.href = "https://t.me/SnoutToken")
                    }
                    className="flex items-center justify-between gap-3 font-[Montserrat] font-extrabold text-xl bg-gradient-to-tr from-blue-400 to-blue-900 hover:scale-105 transition-all  text-white p-4 md:p-5 px-10 rounded-3xl w-fit  border-none  "
                  >
                    Telegram <TbBrandTelegram size={30} />
                  </button>

                  <button
                    onClick={() =>
                      (window.location.href = "https://twitter.com/SNOUT_ERC20")
                    }
                    className="flex items-center justify-between gap-3 font-[Montserrat] font-extrabold text-xl  bg-gradient-to-r from-blue-300 to-green-400 hover:scale-105 transition-all  text-white p-4 md:p-5 px-10 rounded-3xl w-fit  border-none"
                  >
                    Twitter <TbBrandTwitter size={30} />
                  </button>
                </div>
              </div>
            </Zoom>
          </div>
        </section>

        <section className="  w-full bg-bg2 bg-opacity-40" id="">
          <div className=" w-full py-10 px-6 md:px-48">
            <div className="flex flex-col md:flex-row items-start w-full md:gap-3 gap-4 justify-around">
              <div className="flex items-center">
                <div className="block w-24 md:w-48">
                  <ExportedImage
                    src={logo}
                    alt="logo"
                    layout="responsive"
                    className=""
                  />
                </div>
              </div>
              <Fade>
                <ul className="  flex flex-col items-start justify-start ">
                  <p className="text-red-500 text-lg font-bold">Links</p>
                  {list.map(
                    ([name, link], index) =>
                      (link === null && (
                        <Link
                          className={`mt-2 pl-2 text-white  m-1 text-center pr-5   `}
                          key={index}
                          activeClass="none"
                          to={`${name}`}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                        >
                          {name}
                        </Link>
                      )) || (
                        <a
                          className={`mt-2 pl-2 text-white  m-1 text-center pr-5  `}
                          key={index}
                          href={`${link}`}
                        >
                          {name}
                        </a>
                      )
                  )}
                </ul>
              </Fade>
              <Fade>
                <ul className="  flex flex-col items-start justify-start ">
                  <p className="text-red-500 text-lg font-bold">Contact</p>
                  <a
                    className={`mt-2 pl-2 text-white  m-1 text-center pr-5  `}
                    href="https://t.me/SnoutToken"
                  >
                    Telegram
                  </a>
                  <a
                    className={`mt-2 pl-2 text-white  m-1 text-center pr-5  `}
                    href="https://twitter.com/SNOUT_ERC20"
                  >
                    Twitter
                  </a>
                </ul>
              </Fade>
            </div>
          </div>
        </section>
        <section className=" text-sm bg-bg2 text-center p-1 text-white">
          Copyright © {new Date().getFullYear()} Snout . All Rights Reserved.
        </section>
      </Layout>
    </div>
  );
};

export default Home;
