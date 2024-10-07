import OpenAI from 'openai';

export const ChatGptHelper = async (
  content: string,
  { from, to, apiKey }: { from: string; to: string; apiKey: string },
) => {
  const client = new OpenAI({
    apiKey,
  });

  const stream = await client.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: `Translate the following text from ${from} to ${to} and only output the translated text: ${content}`,
      },
    ],
    model: 'gpt-4o-mini',
    max_tokens: 100,
    temperature: 0.3,
  });

  return stream.choices[0].message.content;
};
