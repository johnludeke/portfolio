import Card from "./card";

const ProjectHistory = () => {
  return (
    <div className="flex flex-col space-y-4 w-full items-center">
      <Card
        company={""}
        title={"Portfolio"}
        dates={"July 2024 - Present"}
        stack={[
          ["../symbols/AWS.png", "AWS"],
          ["../symbols/Threejs.png", "Three.js"],
          ["../symbols/TailwindCSS.png", "TailwindCSS"],
          ["../symbols/React.png", "React"],
          ["../symbols/TypeScript.png", "TypeScript"],
          ["../symbols/Nodejs.png", "Node.js"],
        ]}
        link={"https://github.com/johnludeke/portfolio"}
        image={"GitHub"}
      >
        Fully custom and handmade portfolio website. UX/UI completely designed
        by me, along with the development and implementation. Features live
        Spotify connectivity inspired by previous project. The app is also fully
        responsive, and works well for all display types. Deployed using AWS{" "}
        {"Route 53, S3 Bucket, CloudFront"}.
      </Card>
      <Card
        company={""}
        title={"Trivialert"}
        dates={"February 2024"}
        stack={[["../symbols/Python.png", "Python"]]}
        link={"https://github.com/johnludeke/trivialert"}
        image={"GitHub"}
      >
        Python script that reads Reddit's API for updates about local trivia to
        then gets posted in a specified channel on Slack.
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
        link={"https://github.com/johnludeke/spotistat"}
        image={"GitHub"}
      >
        First project ever in React. Custom API that reads from Spotify's Web
        API and then displays the top artists and songs of any user who logs in.
        Introduction to authorization and Express.
      </Card>
    </div>
  );
};

export default ProjectHistory;
