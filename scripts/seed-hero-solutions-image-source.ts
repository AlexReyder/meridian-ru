// import 'dotenv/config'
// import { Client } from 'pg'

// async function main() {
//   const connectionString = process.env.DATABASE_URL

//   if (!connectionString) {
//     throw new Error('DATABASE_URL is not set')
//   }

//   const client = new Client({ connectionString })

//   await client.connect()

//   try {
//     const result = await client.query(`
//       UPDATE public.pages_blocks_hero_solutions
//       SET image_source = 'url'
//       WHERE image_source IS NULL
//          OR image_source::text <> 'url'
//       RETURNING _locale, id, image_source;
//     `)

//     console.log(`✅ Updated rows: ${result.rowCount}`)

//     if (result.rows.length) {
//       console.table(result.rows)
//     } else {
//       console.log('ℹ️ Nothing to update. All heroSolutions rows already use image_source = url')
//     }
//   } finally {
//     await client.end()
//   }
// }

// main().catch((error) => {
//   console.error('❌ seed-hero-solutions-image-source failed')
//   console.error(error)
//   process.exit(1)
// })