// components/SlideUpModal.jsx
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { GoSearch } from "react-icons/go";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: "100%", opacity: 0 }, // Start fully off-screen at bottom
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 22, stiffness: 240 },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: { type: "spring", damping: 24, stiffness: 200 },
  },
};

export default function Searchcomp({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            className="fixed left-0 bottom-0 w-full h-full bg-white shadow-xl rounded-t-3xl"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Place your modal content here */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[85%] lg:w-[70%] border-2 border-[#888585] h-[50px] lg:h-[100px] flex items-center justify-between shadow-[0_0_15px_5px_rgba(0,0,0,0.10)]">
                <input
                  placeholder="Looking for..."
                  className="w-[95%] h-full text-3xl px-10"
                />
                <GoSearch
                  size={50}
                  className="mr-5 cursor-pointer"
                  color="#888585"
                />
              </div>
            </div>

            {/* {children} */}
            <button
              onClick={onClose}
              className="absolute top-10 right-16 text-3xl cursor-pointer"
            >
              <RxCross1
                size={40}
                color="#e94d65"
                className="hover:scale-150 duration-200 transition-all"
              />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
