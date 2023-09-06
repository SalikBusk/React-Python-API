import React, { useEffect, useState } from "react";
import axios from "axios";

const Index = () => {
  const [members, setMembers] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("/members") 
      .then((response) => {
        setMembers(response.data.members);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      {members.map((member, index) => (
        <li key={index}>{member}</li>
      ))}
    </div>
  );
};

export default Index;
