import Anthropic from "@anthropic-ai/sdk";
import React from "react";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`;

const client = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function getRecipeFromChefClaude(ingredientsArr) {
  const ingredientsArrStr = ingredientsArr.join(",");

  const msg = await client.messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: `i have ${ingredientsArrStr} .please give me a recipe you would recommend i make`,
      },
    ],
  });
  return msg.content[0].text;
}
