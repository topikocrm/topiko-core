import { getPayload } from 'payload'
import configPromise from '../../payload.config'

export const getPayloadClient = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  return payload
}

// Helper functions to fetch content
export const getHeroContent = async () => {
  const payload = await getPayloadClient()
  
  const result = await payload.find({
    collection: 'hero',
    where: {
      isActive: { equals: true }
    },
    limit: 1,
  })

  return result.docs[0] || null
}

export const getFeaturesContent = async () => {
  const payload = await getPayloadClient()
  
  const result = await payload.find({
    collection: 'features',
    where: {
      isActive: { equals: true }
    },
    sort: 'order',
  })

  return result.docs
}

export const getTestimonialsContent = async () => {
  const payload = await getPayloadClient()
  
  const result = await payload.find({
    collection: 'testimonials',
    where: {
      isActive: { equals: true }
    },
    sort: 'order',
  })

  return result.docs
}

export const getPricingContent = async () => {
  const payload = await getPayloadClient()
  
  const result = await payload.find({
    collection: 'pricing',
    where: {
      isActive: { equals: true }
    },
    sort: 'order',
  })

  return result.docs
}

export const getCompanyLogosContent = async () => {
  const payload = await getPayloadClient()
  
  const result = await payload.find({
    collection: 'companyLogos',
    where: {
      isActive: { equals: true }
    },
    sort: 'order',
  })

  return result.docs
}

export const getNavigationContent = async () => {
  const payload = await getPayloadClient()
  
  const result = await payload.find({
    collection: 'navigation',
    where: {
      isActive: { equals: true }
    },
    limit: 1,
  })

  return result.docs[0] || null
}

export const getThemeSettings = async () => {
  const payload = await getPayloadClient()
  
  const result = await payload.find({
    collection: 'themeSettings',
    where: {
      isActive: { equals: true }
    },
    limit: 1,
  })

  return result.docs[0] || null
}