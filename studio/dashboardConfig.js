export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df3bbb4d05cf995bfe63d15',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-xqdnhoyj',
                  apiId: 'bd3d5cd1-3a75-49aa-b622-ce46fc3e4008'
                },
                {
                  buildHookId: '5df3bbb4b87df618b90a63ad',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-hcdkprkq',
                  apiId: '4348a745-2fba-4e7d-a68e-4661dac13ee6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cwmoss/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-hcdkprkq.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
