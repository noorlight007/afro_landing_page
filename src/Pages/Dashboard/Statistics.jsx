import React, { useEffect, useState } from "react";
import StatCard from "../../Cards/StatCard";
import Container from "../../Components/Shared/Reusable/Container";
import { getTotalBlogs, getTotalContacts } from "../../hooks/statService";
import { GrArticle } from "react-icons/gr";
import { TiContacts } from "react-icons/ti";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import BtnSpinner from "../../Components/Shared/Reusable/BtnSpinner";

const Statistics = () => {
  const [blogCount, setBlogCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [adminName, setAdminName] = useState();
  const adminUid = localStorage.getItem("admin_uid") || {};

  const axiosPublic = useAxiosPublic();

  axiosPublic
    .get(`/get_admin/${adminUid}/`)
    .then((res) => {
      if (res.data.success) {
        setAdminName(res.data.admin_name);
      }
    })
    .catch(() => {
      setAdminName();
    });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [blogs, contacts] = await Promise.all([
          getTotalBlogs(),
          getTotalContacts(),
        ]);

        setBlogCount(blogs);
        setContactCount(contacts);
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <Container className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold mb-16 title ">
        Hi, Welcome Back! <i>{adminName}</i>
      </h1>

      {loading ? (
        <BtnSpinner />
      ) : (
        <div
          className="flex flex-col sm:flex-row gap-6 lg:gap-10 
        w-full max-w-xs sm:max-w-xl md:max-w-2xl"
        >
          {/* blog card */}
          <StatCard title=" Blogs" count={blogCount} icon={GrArticle} />
          {/* contact card */}
          <StatCard
            title="Contact Requests"
            count={contactCount}
            icon={TiContacts}
          />
        </div>
      )}
    </Container>
  );
};

export default Statistics;
