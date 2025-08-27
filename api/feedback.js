import { createClient } from '@vercel/kv';

// You'll need to set these environment variables in your Vercel project settings.
// Vercel sets these automatically when you create a Vercel KV store.
const KV_REST_API_URL = process.env.KV_REST_API_URL;
const KV_REST_API_TOKEN = process.env.KV_REST_API_TOKEN;

// Create a new Vercel KV client instance.
const kv = createClient({
  url: KV_REST_API_URL,
  token: KV_REST_API_TOKEN,
});

export default async function handler(request, response) {
  // Check if the request method is POST.
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  // Extract the data from the request body.
  const { name, email, message } = request.body;

  // Validate the data.
  if (!name || !email || !message) {
    return response.status(400).json({ message: 'Missing required fields' });
  }

  // Generate a unique key for each feedback entry.
  const feedbackId = `feedback:${Date.now()}`;
  const feedbackData = {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  };

  try {
    // Store the feedback data in Vercel KV.
    await kv.set(feedbackId, feedbackData);

    console.log('New feedback stored in Vercel KV.');
    response.status(200).json({ status: 'success', message: 'Feedback received and stored!' });
  } catch (error) {
    console.error('Error saving feedback to Vercel KV:', error);
    response.status(500).json({ status: 'error', message: 'Failed to store feedback.' });
  }
}
