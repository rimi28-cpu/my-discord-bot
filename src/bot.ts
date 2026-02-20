import { Client, GatewayIntentBits } from 'discord.js';
import { config } from './config';
import { onMessageCreate } from './events/messageCreate';

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

export function startBot() {
  client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`);
  });

  client.on('messageCreate', onMessageCreate);

  client.login(config.discordToken);
}
