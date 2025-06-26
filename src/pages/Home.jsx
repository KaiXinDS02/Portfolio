import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const Home = () => (
  <Layout>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      {/* Your Home content here */}
    </motion.div>
  </Layout>
);

export default Home;