import Card from "./card";

const ProjectHistory = () => {
  return (
    <div className="flex flex-col space-y-4 w-full items-center">
      <Card
        company={""}
        title={"Portfolio"}
        dates={"July 2024 - Present"}
        stack={[
          ["../symbols/Threejs.png", "Three.js"],
          ["../symbols/TailwindCSS.png", "TailwindCSS"],
          ["../symbols/React.png", "React"],
          ["../symbols/TypeScript.png", "TypeScript"],
          ["../symbols/Nodejs.png", "Node.js"],
        ]}
        link={"None"}
        image={"None"}
      >
        Create a technical product from start to finish for a non-profit while
        managing a team of developers and designers.
      </Card>
      <Card
        company={""}
        title={"Trivialert"}
        dates={"February 2024"}
        stack={[["../symbols/Python.png", "Python"]]}
        link={"None"}
        image={"None"}
      >
        Create a technical product from start to finish for a non-profit while
        managing a team of developers and designers.
      </Card>
      <Card
        company={""}
        title={"Spotistat"}
        dates={"July 2023"}
        stack={[
          ["../symbols/React.png", "React"],
          ["../symbols/JavaScript.png", "JavaScript"],
          ["../symbols/Nodejs.png", "Node.js"],
        ]}
        link={"None"}
        image={"None"}
      >
        Create a technical product from start to finish for a non-profit while
        managing a team of developers and designers.
      </Card>
    </div>
  );
};

export default ProjectHistory;
