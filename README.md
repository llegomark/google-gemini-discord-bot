# Discord Bot with Google Generative AI (Gemini) Integration

This is a Discord bot that integrates with Google Generative AI, specifically the Gemini model, to provide conversational capabilities. Gemini is Google's largest and most capable AI model. The bot can respond to user messages, maintain conversation history, and perform various commands. 

## Features

- Responds to user messages using Google Generative AI
- Maintains conversation history for each user
- Supports slash commands for user interactions
- Clears conversation history using the `/clear` command
- Saves conversation and sends it to the user's inbox using the `/save` command
- Automatically changes the bot's presence status every 30 seconds

## Screenshots

![Screenshot](screenshots/Screenshot1.png)

![Screenshot](screenshots/Screenshot2.png)

## Gemini Discord Bot Setup Guide

This guide will walk you through the process of setting up and running the Gemini Discord Bot on your own server. 

**Requirements:**

* Node.js and npm (or yarn) installed on your system.
* A Discord account and a server where you have administrator permissions.
* A Google account with access to the Generative AI API and a valid API key.

**Steps:**

1. **Clone the Repository:**
    - Open a terminal or command prompt and navigate to the directory where you want to store the bot's files.
    - Clone the repository using git:
    ```bash
    git clone https://github.com/llegomark/google-gemini-discord-bot.git
    ```
    - Navigate to the newly created directory:
    ```bash
    cd google-gemini-discord-bot
    ```

2. **Install Dependencies:**
    - Install the required dependencies using npm or yarn:
    ```bash
    npm install
    ```
    or
    ```bash
    yarn install
    ```

3. **Set up Environment Variables:**
    - Create a file named `.env` in the project's root directory.
    - Add the following environment variables to the file, replacing the placeholders with your actual values:
    ```
    DISCORD_BOT_TOKEN=YOUR_DISCORD_BOT_TOKEN
    DISCORD_CLIENT_ID=YOUR_DISCORD_CLIENT_ID
    GOOGLE_API_KEY=YOUR_GOOGLE_API_KEY
    ```
    - You can obtain your bot token and client ID from the [Discord Developer Portal](https://discord.com/developers/docs/intro). 
    - The Google API key can be obtained from the [Google AI Studio](https://aistudio.google.com/).

4. **Deploy Slash Commands (Optional):**
    - This step is only necessary if you want to use slash commands (e.g., `/clear`). 
    - If you don't need slash commands, you can skip this step.
    - In the terminal, run the following command:
    ```bash
    node deploy-commands.js
    ```
    - This will register the slash commands with your Discord application.

5. **Start the Bot:**
    - In the terminal, run the following command to start the bot:
    ```bash
    node index.js
    ```
    - The bot will connect to Discord and be ready to interact with users.

**Interacting with the Bot:**

* **Direct Messages:** Send a direct message to the bot to start a conversation.
* **Mentions:** Mention the bot in a server channel to get its attention.
* **Slash Commands:** Use the `/clear` command to clear the conversation history.

**Additional Notes:**

* You can customize the bot's behavior and responses by modifying the code in the `conversationManager.js` and `config.js` files.
* The `errorHandler.js` file contains basic error handling logic. You can extend it to implement more robust error handling.
* Make sure to keep your API keys and bot token secure. Do not share them publicly. 
* Refer to the [Discord.js documentation](https://discord.js.org/docs/packages/discord.js/14.14.1) and the [Google Generative AI documentation](https://ai.google.dev/docs) for more information on the available features and options. 

**Enjoy using the Gemini Discord Bot!**

Please keep in mind that this project is a work in progress, and breaking changes or new features may be introduced in future updates.