require('dotenv').config({ path: '.env.local' })
const mongoose = require('mongoose')

async function testConnection() {
  try {
    console.log('🔗 Testing MongoDB Atlas connection...')
    console.log('Connection URI:', process.env.DATABASE_URI ? 'Found ✅' : 'Missing ❌')
    
    if (process.env.DATABASE_URI) {
      // Hide password for security but show connection format
      const maskedUri = process.env.DATABASE_URI.replace(/:[^@]+@/, ':****@')
      console.log('URI format:', maskedUri)
    }
    
    await mongoose.connect(process.env.DATABASE_URI)
    console.log('✅ Successfully connected to MongoDB Atlas!')
    
    // Test basic operations
    const collections = await mongoose.connection.db.listCollections().toArray()
    console.log('📊 Available collections:', collections.length)
    
    await mongoose.connection.close()
    console.log('✅ Connection test completed successfully')
    process.exit(0)

  } catch (error) {
    console.error('❌ Connection failed:', error.message)
    
    if (error.message.includes('authentication failed')) {
      console.log('\n🔧 Troubleshooting steps:')
      console.log('1. Check username/password in MongoDB Atlas')
      console.log('2. Verify database user has proper permissions')
      console.log('3. Make sure IP address is whitelisted')
    }
    
    process.exit(1)
  }
}

testConnection()