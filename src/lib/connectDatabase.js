import mongoose from 'mongoose';

async function connectDatabase() {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}`, {
      dbName: process.env.DB_NAME,
    });
    // eslint-disable-next-line no-console
    console.log('🛢  Database connected.');
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('⭕️ Database connection failded.');
  }
}

export default connectDatabase;
