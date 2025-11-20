/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import type { NextRequest } from 'next/server'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { importMap } from './importMap.js'
import config from '../../../../payload.config.js'

type Args = {
  params: {
    slug: string[]
  }
}

const payloadHandler = async (req: NextRequest, { params }: Args) => {
  const payload = await getPayloadHMR({ config, importMap })

  return payload.handler(req, { params })
}

export { payloadHandler as DELETE, payloadHandler as GET, payloadHandler as PATCH, payloadHandler as POST }