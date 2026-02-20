import { Message } from 'discord.js';
import { config } from '../config';

export function parseCommand(message: Message): { command: string; args: string[] } | null {
  const content = message.content.trim();
  const prefix = config.defaultPrefix; // TODO: fetch per-guild prefix from DB

  // Prefix check
  if (content.startsWith(prefix)) {
    const withoutPrefix = content.slice(prefix.length).trim();
    const parts = withoutPrefix.split(/\s+/);
    const command = parts.shift()?.toLowerCase();
    if (!command) return null;
    return { command, args: parts };
  }

  // Mention check
  if (message.mentions.has(message.client.user!)) {
    const withoutMention = content.replace(/<@!?&?\d+>/g, '').trim();
    const parts = withoutMention.split(/\s+/);
    const command = parts.shift()?.toLowerCase();
    if (!command) return null;
    return { command, args: parts };
  }

  return null;
}
