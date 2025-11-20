/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { importMap } from './importMap.js'
import config from '../../../../payload.config.js'

const payloadHandler = async (req, { params }) => {
  const payload = await getPayloadHMR({ config, importMap })

  return payload.handler(req, { params })
}

export { payloadHandler as DELETE, payloadHandler as GET, payloadHandler as PATCH, payloadHandler as POST }