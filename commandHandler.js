class CommandHandler {
    constructor() {
      this.commands = {
        clear: this.clearCommand,
        save: this.saveCommand,
      };
    }
  
    isCommand(message) {
      return message.content.startsWith('/');
    }
  
    async handleCommand(message, conversationManager) {
      const [commandName, ...args] = message.content.slice(1).split(' ');
      const command = this.commands[commandName];
  
      if (command) {
        await command(message, args, conversationManager);
      } else {
        // Ignore unknown commands
        return;
      }
    }
  
    async clearCommand(message, args, conversationManager) {
      conversationManager.clearHistory(message.author.id);
      await message.reply('> `Your conversation history has been cleared.`');
    }

    async saveCommand(interaction, args, conversationManager) {
      const userId = interaction.user.id;
      const conversation = conversationManager.getHistory(userId);
    
      if (conversation.length === 0) {
        await interaction.reply('> `There is no conversation to save.`');
        return;
      }
    
      const conversationText = conversation
        .map(line => `${line.role === 'user' ? 'User' : 'Bot'}: ${line.parts[0].text}`)
        .join('\n');
    
      try {
        const maxLength = 1900;
        const chunks = [];
    
        // Split the conversation into chunks of maxLength characters or less
        let startIndex = 0;
        while (startIndex < conversationText.length) {
          let endIndex = startIndex + maxLength;
          if (endIndex >= conversationText.length) {
            endIndex = conversationText.length;
          } else {
            // Find the last newline character within the chunk
            while (endIndex > startIndex && conversationText[endIndex] !== '\n') {
              endIndex--;
            }
            if (endIndex === startIndex) {
              endIndex = startIndex + maxLength;
            }
          }
          const chunk = conversationText.slice(startIndex, endIndex).trim();
          chunks.push(chunk);
          startIndex = endIndex;
        }
    
        // Send each chunk as a separate message
        for (const [index, chunk] of chunks.entries()) {
          await interaction.user.send(`Here is your saved conversation (part ${index + 1}):` +
            `\n\n${chunk}`);
        }
    
        await interaction.reply('> `The conversation has been saved and sent to your inbox.`');
      } catch (error) {
        console.error('Error sending conversation to user:', error);
        await interaction.reply('> `Failed to send the conversation to your inbox. Please check your privacy settings.`');
      }
    }
  }

  module.exports.CommandHandler = CommandHandler;