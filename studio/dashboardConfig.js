export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '609537cb654a585d81e262cd',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-y7vbjzgo',
                  apiId: '4b3fea11-cb64-42a2-8c2e-3b2e8925027c'
                },
                {
                  buildHookId: '609537cbe72f295e7b5ba652',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-s3za8mja',
                  apiId: 'dc9b5303-7556-4a39-874c-73cac478aeaa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ezalorsara/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-s3za8mja.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
