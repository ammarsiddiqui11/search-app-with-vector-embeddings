**This is a search functionality + recommendation app using vector embedding**

**Things to know:**
1. Vector embeddings are generated using Hugging Face's model called `"sentence-transformers/all-MiniLM-L6-v2"`.
2. Embeddings are stored in MongoDB and a vector search index is created.
3. For search functionality, embeddings are created on the fly.
4. Aggregation pipeline on vector search gives similarity using cosine similarity.
5. Backend file structure is kind of shitty.
