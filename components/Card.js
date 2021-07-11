import { motion } from "framer-motion";

export default function Card({ c }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 1 }}
      transition={{ duration: 0.5 }}
      className="sm:m-5 m-1 bg-gray-100 p-3"
    >
      <p>
        <span className="font-semibold">Center:</span> {c.name}
      </p>
      <p>
        <span className="font-semibold">Date:</span> {c.date}
      </p>
      <p>
        <span className="font-semibold">Pincode:</span> {c.pincode}
      </p>
      <p>
        {c.slots.length} {c.slots.length === 1 ? "slot" : "slots"}{" "}
        <span className="text-gray-500">available</span>
      </p>
      <p className="font-bold text-lg">{c.vaccine}</p>
      <p>
        dose 1:{" "}
        <span
          className={`${
            c.available_capacity_dose1 > 1
              ? "text-green-500 font-bold text-lg"
              : "text-black"
          }`}
        >
          {c.available_capacity_dose1}
        </span>
      </p>
      <p>
        dose 2:{" "}
        <span
          className={`${
            c.available_capacity_dose2 > 1
              ? "text-green-500 font-bold text-lg"
              : "text-black"
          }`}
        >
          {c.available_capacity_dose2}
        </span>{" "}
      </p>
      <p>Fee type: {c.fee_type}</p>
    </motion.div>
  );
}
