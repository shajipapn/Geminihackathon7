import fetch from "node-fetch";

const API_KEY = "AIzaSyB44-_rqP9cIaUlUFNKthvI-ih3Q8u4KZM";

async function listModels() {
  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1/models",
    {
      headers: { "x-goog-api-key": API_KEY }
    }
  );
  const data = await response.json();
  console.log(JSON.stringify(data, null, 2));
}

listModels();
