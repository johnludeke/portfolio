import Card from "./card";

const WorkHistory = () => {
  return (
    <div className="flex flex-col space-y-4 w-full items-center">
      <Card
        company={"IMC Trading"}
        title={"Incoming Software Engineer Intern"}
        dates={"June 2025 - August 2025"}
        stack={[]}
        link={"None"}
        image={"None"}
      >
        Proprietary trading and market making.
      </Card>
      <Card
        company={"Hack4Impact"}
        title={"Product Manager"}
        dates={"August 2024 - Present"}
        stack={[]}
        link={"None"}
        image={"None"}
      >
        Create a technical product from start to finish for a non-profit while
        managing a team of developers and designers.
      </Card>
      <Card
        company={"AbbVie"}
        title={"Software Engineer Intern"}
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
        Kind Space dashboard designed and implemented for non-profit Foster
        Nation. Kind Space allows foster youth to request gifts, and for donors
        to fulfill those requests.
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
        Custom job board for U.S. veterans to improve job placement and to help
        analyze analytics for non-profit Operation Code. The app allows
        companies to post job openings and for veterans entering tech to seek
        them out.
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
        Mobile web application for the University of Dayton that allows users to
        order food from a multitude of locations completely online. The app
        handles the entire flow, both for the user placing the order and for the
        worker receiving the order.
      </Card>
    </div>
  );
};

export default WorkHistory;
