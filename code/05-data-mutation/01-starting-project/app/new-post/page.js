export default function NewPostPage() {
  return (
    <>
      <h1>Create a new post</h1>
      <form>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <button type="reset">Reset</button>
          <button>Create Post</button>
        </p>
      </form>
    </>
  );
}
