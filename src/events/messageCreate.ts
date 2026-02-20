import { Message } from 'discord.js';
import { parseCommand } from '../utils/commandParser';

export async function onMessageCreate(message: Message) {
  if (message.author.bot) return;

  const parsed = parseCommand(message);
  if (parsed) {
    // Temporary response – replace with actual command handling later
    await message.reply(`Command: ${parsed.command}, Args: ${parsed.args.join(' ')}`);
    return;
  }

  // Non-command messages will later trigger character responses
}
