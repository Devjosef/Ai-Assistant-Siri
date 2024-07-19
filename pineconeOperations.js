import { Pinecone } from '@pinecone-database/pinecone';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Pinecone Client
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY, // Ensure this environment variable is set
});

// Prepare the Pinecone index
const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX_NAME);

// Function to get embedding from OpenAI
export const getEmbedding = async (text) => {
  try {
    const response = await openai.createEmbedding({
      model: 'text-embedding-ada-002',
      input: text,
    });
    return response.data.data[0].embedding;
  } catch (error) {
    console.error('Error creating embedding:', error);
    throw error;
  }
};

// Function to store embedding in Pinecone
export const storeEmbedding = async (text, metadata) => {
  try {
    const embedding = await getEmbedding(text);
    await pineconeIndex.upsert([{ id: metadata.id, values: embedding }]);
  } catch (error) {
    console.error('Error storing embedding:', error);
    throw error;
  }
};

// Function to query embedding in Pinecone
export const queryEmbedding = async (text) => {
  try {
    const embedding = await getEmbedding(text);
    const result = await pineconeIndex.query({ vector: embedding, topK: 5 });
    return result.matches;
  } catch (error) {
    console.error('Error querying embedding:', error);
    throw error;
  }
};

