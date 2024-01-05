import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 0.9 }}
      dragElastic={0.1}
      dragTransition={{ bounceDamping: 30, bounceStiffness: 200 }}
      className="relative w-60 h-72 bg-zinc-900/90 rounded-[30px] text-white py-10 px-7 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>

      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between py-3  px-7">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center mb-3">
            {data.close ? (
              <IoClose size=".9em" color="#fff" />
            ) : (
              <LuDownload size=".9em" color="#fff" />
            )}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag w-full py-2 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            }  mt-[-7px]`}
          >
            <h3 className="text-center text-md font-semibold">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
