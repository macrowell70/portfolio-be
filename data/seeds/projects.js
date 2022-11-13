exports.seed = async function(knex) {
  await knex('projects').del()
  await knex('projects').insert([
    {
      title: "Mortgage Calculator",
      thumbnail: "https://i.ibb.co/x8NpTpc/29c43a62-65e7-4a3b-b9ca-b41206dd8691.png",
      description: "An application designed to calculate a recommended mortgage principal and monthly payment based on a users financial profile.",
      link: "https://mortgage-calculator-omega.vercel.app/"
    },
    {
      title: "Fluid Innovations",
      thumbnail: "https://i.ibb.co/g3JVD6f/804eda8e-f958-43b4-8990-a2d2e8fa8c0d.png",
      description: "This site was created for a local small business",
      link: "https://fluid-innovations-site.vercel.app/"
    }
  ]);
};
