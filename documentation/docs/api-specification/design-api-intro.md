---
sidebar_position: 2
description: What should be in this section.
---

## !!Probably going to delete this page as it does not relate to our final project!!


Design Document - Part II API
=============================

## API Spec for Creating SQL Queries from User Prompts

This document outlines the API specifications for how PhillyGPT interacts with ChatGPT for query generation and returning the JSON/Dictionary data from our databases. This solution is Carto agnostic. 

### Classes/Exceptions

* **NotReadOnlyException:** Exception raised when a non-read-only SQL query is attempted.

### Functions

#### `make_default_message(schemas_str: str) -> List[Dict[str, str]]`

This function constructs an enriched prompt for the LLM by:

* Providing context about available tables and their schemas (schemas_str).
* Offering guidance on formulating syntactically correct SQL queries.
* Setting expectations about the response format and limitations.

**Parameters:**

* `schemas_str`: A string containing the schemas of the available tables.

**Returns:**

* The enriched prompt.

#### `make_msg_with_schema(natural_language_query: str) -> str`

This function returns a message prompting the LLM to rephrase the user's query in a more analytical way.

**Parameters:**

* `natural_language_query`: The user's natural language query.

**Returns:**

* A string containing an improved prompt.

#### `is_read_only_query(sql_query: str) -> bool`

This function checks if the provided SQL query is a read-only query.

**Parameters:**

* `sql_query`: The SQL query to be checked.

**Returns:**

* True if the query is read-only, False otherwise.

#### `execute_sql(sql_query: str) -> Dict`

This function executes the provided SQL query and returns the results in a dictionary/JSON format.

**Parameters:**

* `sql_query`: The SQL query to be executed.

**Returns:**

* A dictionary containing the following keys:
    * `column_names`: A list of column names in the result.
    * `results`: A list of rows, where each row is a dictionary mapping column names to their corresponding values.

**Raises:**

* `NotReadOnlyException`: If the query is not read-only.

#### `text_to_sql_with_retry(natural_language_query: str, table_names: List[str], k: int = 2) -> Tuple[Dict, str]`

This function attempts to generate a valid SQL query for the given natural language query, using an LLM (in our case GPT) and retrying up to k times if necessary.

**Parameters:**

* `natural_language_query`: The user's natural language query.
* `table_names`: A list of table names relevant to the query.
* `k` (optional): The number of retries (defaults to 2).

**Returns:**

* A tuple containing:
    * A dictionary representing the SQL query results (same format as `execute_sql`).
    * The generated SQL query string. This can be used to create a new Carto Layer to allow us to display the map. However, this current solution does not make us tied to using Carto as Professor Applebaum requested.
* Returns `None, None` if the query could not be generated after k retries.
