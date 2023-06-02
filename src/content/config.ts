import { defineCollection, z } from 'astro:content'

const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    tags: z.array(z.string()),
    img: z.string(),
    img_alt: z.string().optional()
  })
})

// const lang = defineCollection({
//   type: 'data',
//   schema: z.object({
//     en: z.object({
//       elyse: z.object({
//         title: z.string(),
//         publishDate: z.coerce.date(),
//         img: z.string(),
//         img_alt: z.string().optional(),
//         description: z.string(),
//         tags: z.array(z.string()),
//         description2: z.string(),
//         contextMission: z.string(),
//         missionContext: z.string(),
//         backendTechnology: z.string(),
//         mobileFirst: z.string(),
//         satisfactionClient: z.string(),
//         frontTechnologies: z.string(),
//         project: z.string(),
//         maquetteAnalysis: z.string(),
//         maquetteStructure: z.string(),
//         interfaceElements: z.string(),
//         sectionsFormsButtons: z.string(),
//         environmentConfiguration: z.string(),
//         craProjectCreation: z.string(),
//         typescriptInstallation: z.string(),
//         navigationSetup: z.string(),
//         reactRouterUsage: z.string(),
//         applicationStateManagement: z.string(),
//         localStateManagement: z.string(),
//         dynamicDataIntegration: z.string(),
//         firebaseDataRetrieval: z.string(),
//         firebaseFormSubmission: z.string(),
//         interactiveFeatureIntegration: z.string(),
//         clickHandlingFormSubmission: z.string(),
//         manualTesting: z.string(),
//         betaTesting: z.string(),
//         versioning: z.string(),
//         after: z.string(),
//         improvements: z.string(),
//         contextsOrRedux: z.string(),
//         craToViteMigration: z.string(),
//         jestTesting: z.string()
//       })
//     }),
//     fr: z.object({
//       elyse: z.object({
//         title: z.string(),
//         publishDate: z.coerce.date(),
//         img: z.string(),
//         img_alt: z.string().optional(),
//         description: z.string(),
//         tags: z.array(z.string()),
//         description2: z.string(),
//         contextMission: z.string(),
//         missionContext: z.string(),
//         backendTechnology: z.string(),
//         mobileFirst: z.string(),
//         satisfactionClient: z.string(),
//         frontTechnologies: z.string(),
//         project: z.string(),
//         maquetteAnalysis: z.string(),
//         maquetteStructure: z.string(),
//         interfaceElements: z.string(),
//         sectionsFormsButtons: z.string(),
//         environmentConfiguration: z.string(),
//         craProjectCreation: z.string(),
//         typescriptInstallation: z.string(),
//         navigationSetup: z.string(),
//         reactRouterUsage: z.string(),
//         applicationStateManagement: z.string(),
//         localStateManagement: z.string(),
//         dynamicDataIntegration: z.string(),
//         firebaseDataRetrieval: z.string(),
//         firebaseFormSubmission: z.string(),
//         interactiveFeatureIntegration: z.string(),
//         clickHandlingFormSubmission: z.string(),
//         manualTesting: z.string(),
//         betaTesting: z.string(),
//         versioning: z.string(),
//         after: z.string(),
//         improvements: z.string(),
//         contextsOrRedux: z.string(),
//         craToViteMigration: z.string(),
//         jestTesting: z.string()
//       })
//     })
//   })
// })

export const collections = { work }
