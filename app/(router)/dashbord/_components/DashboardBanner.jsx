"use client"
import React, { useEffect } from 'react';
import axios from 'axios';
import BannerImg from '../../Banner/_components/BannerImg';

const DashboardBanner = () => {
  useEffect(() => {
    const getAllCourses = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/course");
        console.log(response.data); 
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    // Call the function to fetch courses
    getAllCourses();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div>
      <BannerImg />
    </div>
  );
};

export default DashboardBanner;
