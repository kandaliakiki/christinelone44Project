"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState<number>(0);
  const pathRef = useRef<SVGPathElement | null>(null); // Ref for the black path
  const path2Ref = useRef<SVGPathElement | null>(null); // Ref for the purple path
  const totalLength = 627.012939453125; // The total length of the path

  useEffect(() => {
    let currentProgress = 45; // Start from 45%

    const interval = setInterval(() => {
      if (currentProgress >= 100) {
        // Reset to 45% after reaching 100%
        currentProgress = 45;
      } else {
        currentProgress++;
      }

      // Calculate offsets for both paths
      const offset = ((currentProgress - 40) / (100 - 30)) * 500; // Scale offset to go from 0 to 580
      const offset2 = Math.max(0, offset - totalLength / 100); // Offset for purple path

      // Calculate dash offsets
      if (pathRef.current) {
        pathRef.current.style.strokeDashoffset = `${totalLength - offset}`; // Move black path from right to left
      }
      if (path2Ref.current) {
        path2Ref.current.style.strokeDashoffset = `${totalLength - offset2}`; // Move purple path
      }
      setProgress(currentProgress);
    }, 100); // Adjust speed by changing the interval time

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []); // Empty dependency array to run only once on mount

  return (
    <div className="relative mt-4">
      <svg
        width="440"
        height="200"
        viewBox="15 -40 500 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M377 196C377 147.996 357.93 101.958 323.986 68.0137C290.042 34.0696 244.004 15 196 15C147.996 15 101.958 34.0696 68.0137 68.0137C34.0696 101.958 15 147.996 15 196"
          stroke="purple"
          strokeWidth="50"
          strokeLinecap="round"
        />
        <path
          ref={pathRef}
          id="progress-path"
          d="M15.0375 196C15.0683 147.996 34.1675 101.97 68.1334 68.0477C102.099 34.1255 148.15 15.0855 196.154 15.1163C244.158 15.1472 290.184 34.2463 324.106 68.2122C358.028 102.178 377.068 148.228 377.037 196.233L377.037 254.616"
          stroke="black"
          strokeWidth="50"
          strokeDasharray="627.012939453125"
          strokeDashoffset="575"
        />
        <path
          ref={path2Ref}
          id="progress-path2"
          d="M15.0375 196C15.0683 147.996 34.1675 101.97 68.1334 68.0477C102.099 34.1255 148.15 15.0855 196.154 15.1163C244.158 15.1472 290.184 34.2463 324.106 68.2122C358.028 102.178 377.068 148.228 377.037 196.233L377.037 254.616"
          stroke="#DC5049"
          strokeWidth="50"
          strokeDasharray="627.012939453125"
          strokeDashoffset="580"
        />
        <path
          d="M15.0375 196C15.0683 147.996 34.1675 101.97 68.1334 68.0477C102.099 34.1255 148.15 15.0855 196.154 15.1163C244.158 15.1472 290.184 34.2463 324.106 68.2122C358.028 102.178 377.068 148.228 377.037 196.233L377.037 254.616"
          stroke="#DC5049"
          strokeWidth="50"
          strokeDasharray="1,627.012939453125"
          strokeDashoffset="627.012939453125"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute bottom-8 left-14">
        <div
          className=" -rotate-45 relative w-[180px] h-[90px] bg-gradient-to-l from-white/20 to-transparent
       rounded-t-full "
        >
          <Image
            alt="point"
            src="/assets/droplet.svg"
            width={30}
            height={30}
            className="z-10 absolute opacity-100 rotate-90 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
          ></Image>
        </div>
      </div>
      <div className="absolute -top-1 left-3">
        <Image
          alt="progressbar-indicators"
          src="/assets/progressbar-indicators.svg"
          width={330}
          height={330}
        ></Image>
      </div>
    </div>
  );
};

export default ProgressBar;
