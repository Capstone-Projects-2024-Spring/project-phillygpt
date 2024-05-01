---
sidebar_position: 1
---

# API Classes

Here are the API's we created and implemented for use in our backend.

### `ProcessInput`
- **Operations**: `post()`, `openai_request(user_input)`
- **Description**: This class is responsible for handling user inputs and generating SQL queries via OpenAI based on user prompts, and determining the appropriate database tables for queries.

### `ProcessInputMap`
- **Operations**: `post()`, `openai_request(user_input, marker_text)`
- **Description**: Similar to `ProcessInput`, this class handles POST requests and uses OpenAI to generate SQL queries but focuses on map-related inputs and interactions.

### `Reprompt`
- **Operations**: `post()`, `generate_reprompt_suggestions(user_input, table_name)`, `openai_reprompt_req(suggestion)`, `refine_prompts(prompts)`
- **Description**: Handles re-prompting logic when initial user inputs do not clearly correspond to database schema, using OpenAI to refine prompts and suggestions for better user interaction.
