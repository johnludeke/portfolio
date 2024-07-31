import Card from "./card";

const WorkHistory = () => {
  return (
    <div className="flex flex-col space-y-4 w-full items-center">
      <Card
        company={"Hack4Impact"}
        title={"Incoming Product Manager"}
        dates={"June 2024 - Present"}
        stack={[]}
        link={"None"}
        image={"None"}
      >
        Create a technical product from start to finish for a non-profit while
        managing a team of developers and designers.
      </Card>
      <Card
        company={"AbbVie"}
        title={"Software Engineering Intern"}
        dates={"May 2024 - Present"}
        stack={[
          ["../symbols/JavaScript.png", "JavaScript"],
          ["../symbols/Jira.png", "Jira"],
          ["../symbols/Confluence.png", "Confluence"],
        ]}
        link={"None"}
        image={"None"}
      >
        Learned agile and waterfall frameworks along with Atlassian Jira /
        Confluence, gaining administrative access. Performed hot bug fixes for
        an AbbVie Atlassian instance with 3000+ employees with quick turnaround.
        Developed custom scripts in Groovy to enhance functionality within Jira
        and increase productivity company-wide.
      </Card>
      <Card
        company={"Hack4Impact"}
        title={"Software Developer for Foster Nation"}
        dates={"January 2024 - May 2024"}
        stack={[
          ["../symbols/AWS.png", "AWS"],
          ["../symbols/Postman.png", "Postman"],
          ["../symbols/MongoDB.png", "MongoDB"],
          ["../symbols/React.png", "React"],
          ["../symbols/TypeScript.png", "TypeScript"],
          ["../symbols/Nodejs.png", "Node.js"],
          ["../symbols/Git.png", "Git"],
        ]}
        link={"https://www.fosternation.org"}
        image={"../images/fosternation.png"}
      >
        Worked closely with the nonprofit client to design and build a donation
        dashboard for foster youth. Connected AWS S3 bucket to the frontend,
        enabling the dashboard to display images from donation requests. Built
        out the main dashboard using Chakra UI and React, creating responsive
        and performant navigation. Connected our app to our Mongo database with
        routes for foster youth, gift requests, and donations.
      </Card>
      <Card
        company={"Hack4Impact"}
        title={"Software Developer for Operation Code"}
        dates={"September 2023 - December 2023"}
        stack={[
          ["../symbols/PostgreSQL.png", "PostgreSQL"],
          ["../symbols/TailwindCSS.png", "TailwindCSS"],
          ["../symbols/Supabase.png", "Supabase"],
          ["../symbols/Nextjs.png", "Next.js"],
          ["../symbols/TypeScript.png", "TypeScript"],
          ["../symbols/Nodejs.png", "Node.js"],
          ["../symbols/Git.png", "Git"],
        ]}
        link={"https://operationcode.org"}
        image={"../images/operationcode.png"}
      >
        Developed job board for U.S. veterans to improve job placement and to
        help analyze analytics for Operation Code. Engineered custom claims with
        PostgreSQL to access and set client permissions using Supabase.
        Practiced responsive web design using Tailwind CSS, creating
        aesthetically pleasing and user-friendly sign-in pages. Implemented
        responsive and reusable stepper component using TypeScript and Tailwind
        for smoother navigation.
      </Card>
      <Card
        company={"Flyer Enterprises"}
        title={"Software Engineer"}
        dates={"September 2022 - May 2023"}
        stack={[
          ["../symbols/MySQL.png", "MySQL"],
          ["../symbols/Angular.png", "Angular"],
          ["../symbols/TypeScript.png", "TypeScript"],
          ["../symbols/Nodejs.png", "Node.js"],
          ["../symbols/Git.png", "Git"],
        ]}
        link={"https://flyerenterprises.web.app/"}
        image={"../images/flyerenterprises.png"}
      >
        Advanced online ordering feature, giving students access to campus
        dining services for over 500 users w/ AngularJS. Secured API access by
        creating JavaScript middleware that validated user authentication,
        ensuring integrity. Designed and implemented TypeScript component that
        selectively displayed open dining locations for ease-of-use.
        Collaborated with a cross-functional team through Git, participating in
        agile methodologies, and weekly sprints.
      </Card>
    </div>
  );
};

export default WorkHistory;
