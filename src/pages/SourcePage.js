import React from "react";
import Navbar from "./homepage/Navbar";
import Footer from "./homepage/Footer";

function SourcePage() {
  const references = [
    { name: "BMO IMAGE 1", url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.artstation.com%2Fartwork%2F8bPvLG&psig=AOvVaw3tcTpXQKgO5hllAEezHIeG&ust=1727521607965000&source=images&cd=vfe&opi=89978449&ved=0CBEQjhxqFwoTCIik6an94ogDFQAAAAAdAAAAABAE" },
    { name: "BMO IMAGE 2", url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.turbosquid.com%2F3d-models%2F3d-bmo-character-from-adventure-time-2078334&psig=AOvVaw0oe9mYsj4SCvzQMw7_DQBe&ust=1727521995518000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMj_zOT-4ogDFQAAAAAdAAAAABAE" },
    { name: "BMO 3D MODEL", url: "https://sketchfab.com/3d-models/bmo-72e7a51acc2c45ba8ead509d9683f6c2" },
    { name: "BAYMAX IMAGE 1", url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FTihiRxi_baymax-box-png-download-baymax-png-transparent-png%2F&psig=AOvVaw06YXvf4TIJDs-bOKA3sLW0&ust=1727522177252000&source=images&cd=vfe&opi=89978449&ved=0CBcQjhxqFwoTCICwn7b_4ogDFQAAAAAdAAAAABAE" },
    { name: "BAYMAX IMAGE 2", url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fshopee.co.id%2FLow-Battery-Baymax-Big-Hero-6-Ippai-Full-Collection-Gacha-Gasha-Figure-i.154860922.21612810442&psig=AOvVaw209cm_TN4x1fn7ZaNG-yGD&ust=1727522220781000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMimgsz_4ogDFQAAAAAdAAAAABA0" },
    { name: "BAYMAX 3D MODEL", url: "https://sketchfab.com/3d-models/cute-baymax-low-poly-3d-model-f2b61a7fddfd44b5adaa94e7bdce7438" },
    { name: "VECTOR ROBOT IMAGE 1", url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.robotmp.com%2Fvector-2-0-ai-robot-companion-smart-robot&psig=AOvVaw29SoaqjdprIgQ9QfyZEcdJ&ust=1727522379329000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCtlJaA44gDFQAAAAAdAAAAABAE" },
    { name: "VECTOR ROBOT IMAGE 2", url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wired.com%2Fstory%2Fankis-new-home-robot-sure-is-cute-but-can-it-survive%2F&psig=AOvVaw3SUQnxiBU5u08sFs99kkn9&ust=1727522432832000&source=images&cd=vfe&opi=89978449&ved=0CBEQjhxqFwoTCNDFqa-A44gDFQAAAAAdAAAAABAE" },
    { name: "VECTOR ROBOT 3D MODEL", url: "https://sketchfab.com/3d-models/vector-robot-bd1028856b234d7a9cc7517e4489deae" },
    { name: "ICONS 8", url: "https://www.figma.com/community/plugin/791103617505812222/icons8-icons-illustrations-photos" }, 
  ];

  return (
    <>
    <Navbar />
    <div className="px-4 pt-6 pb-32 w-full bg-white mb-10">
      <h1 className="text-2xl font-bold mb-4">References</h1>
      <ul className="list-disc pl-6">
        {references.map((reference, index) => (
          <li key={index} className="mb-2">
            <a href={reference.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              {reference.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <Footer />
    </>
  );
}

export default SourcePage;
