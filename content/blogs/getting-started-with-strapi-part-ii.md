## Collection Type

#### Creating a new collection type

Let's start by creating a new collection type to manage book data. In the administration panel select the link Content-Types Builder from the left-side navigation menu. You should then see a list of already existing collection types:

![strapi-content-manager](https://res.cloudinary.com/pratiek/image/upload/v1604081194/strapi_content_manager_PNG_b39918a6ea.png)

Click on the link Create new collection type to start creating a new one. You should then be able to see the Create a collection type form:

![02-strapi-create-content-type](https://res.cloudinary.com/pratiek/image/upload/v1604078143/02_strapi_create_content_type_752cca586e.png)

In input field Display name you need to enter the name of the new collection type, e.g. Book. You can then click on the button Continue which will redirect you to the the view were you can start adding fields to your collection type:

![03-strapi-new-type](https://res.cloudinary.com/pratiek/image/upload/v1604078143/03_strapi_new_type_d9b90b2c87.png)

Here you can select from a list of available data types to add new fields to the collection. For the first field to add select data type Text and then specify the name of the new field in the next screen:

![04-strapi-base-settings](https://res.cloudinary.com/pratiek/image/upload/v1604078657/04_strapi_base_settings_ad5bfd65de.png)

You can also click on the advanced settings tab on top-right to add some validation rules as seen below

![05-strapi-advanced-settings](https://res.cloudinary.com/pratiek/image/upload/v1604078657/05_strapi_advanced_settings_3b3f75f4e2.png)

For the Book collection type add the following data field:

- title (of type Text)
- description (of type Text)
- rating (of type Number)

The collection type view should then look like what you can see in the following screenshot:

![06-strapi-book-view](https://res.cloudinary.com/pratiek/image/upload/v1604081404/06_strapi_book_view_9c741980a5.png)

Click on the Save button. This will create the collection type and will also restart the server with the new collection type.

## Creating Content

When you add new data to a collection type, Strapi automatically provides you with a data entry form that includes all the fields you've defined for that collection type. This form is dynamically generated based on your schema, so you'll only see the fields you've configured.

For our Book collection type, you'll see a form with three fields:

- **Title**: A text input field for the book's title
- **Description**: A text area for the book's description
- **Rating**: A number input field for the book's rating

### Step-by-Step Content Creation

1. **Navigate to Content Manager**: In the left sidebar, click on "Content Manager"
2. **Select Collection Type**: Choose "Book" from the dropdown menu
3. **Add New Entry**: Click the "+ Create new entry" button
4. **Fill in the Form**:
   - Enter a book title (e.g., "The Great Gatsby")
   - Write a description (e.g., "A classic American novel about the Jazz Age")
   - Set a rating (e.g., 4.5)
5. **Save the Entry**: Click "Save" to store your first book entry
6. **Publish**: Click "Publish" to make it available via the API

Repeat this process to create 3-4 sample books so you have enough data to test with.

## Testing the REST API

Now that we've added data to our collection types, we're ready to test the REST API that Strapi automatically generates. Strapi creates several endpoints for each collection type:

- `GET /api/books` - Retrieve all books
- `GET /api/books/:id` - Retrieve a specific book by ID
- `POST /api/books` - Create a new book
- `PUT /api/books/:id` - Update an existing book
- `DELETE /api/books/:id` - Delete a book

### Testing the GET Endpoint

Let's test the main endpoint by opening your browser and navigating to:

```
http://localhost:1337/api/books
```

**Expected Result**: You should see a JSON response with all your book data.

**Actual Result**: You'll likely get an HTTP 403 Forbidden error, which means the endpoint is not accessible.

## Understanding the 403 Error

The 403 error occurs because Strapi has a built-in security system that requires explicit permission configuration. By default, all API endpoints are locked down for security reasons.

### Why This Happens

Strapi uses a role-based access control (RBAC) system where:

- **Public Role**: Applies to unauthenticated requests (like visiting the URL in your browser)
- **Authenticated Role**: Applies to requests with valid authentication tokens
- **Default Behavior**: Both roles start with no permissions, so all endpoints return 403

## Fixing the Permissions

To resolve this issue, we need to configure the permissions for the Public role to allow reading book data.

### Step-by-Step Permission Setup

1. **Open Roles & Permissions**: In the left sidebar, click on "Settings" → "Users & Permissions Plugin" → "Roles"

2. **Select Public Role**: Click on the "Public" role (this handles unauthenticated requests)

3. **Configure Book Permissions**: In the permissions section, find "Book" and enable these permissions:

   - ✅ **count** - Allows counting total books
   - ✅ **find** - Allows retrieving all books (covers GET /api/books)
   - ✅ **findOne** - Allows retrieving individual books (covers GET /api/books/:id)

4. **Save Changes**: Click "Save" to apply the new permissions

### What Each Permission Does

- **count**: Enables the `/api/books/count` endpoint for getting total book count
- **find**: Enables the `/api/books` endpoint for retrieving all books
- **findOne**: Enables the `/api/books/:id` endpoint for retrieving specific books

## Testing the Fixed API

After saving the permissions, test the endpoint again by refreshing your browser at:

```
http://localhost:1337/api/books
```

**Expected Result**: You should now see a successful JSON response containing all your book data, similar to this:

```json
{
  "data": [
    {
      "id": 1,
      "attributes": {
        "title": "The Great Gatsby",
        "description": "A classic American novel about the Jazz Age",
        "rating": 4.5,
        "createdAt": "2023-01-15T10:30:00.000Z",
        "updatedAt": "2023-01-15T10:30:00.000Z"
      }
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 1,
      "total": 1
    }
  }
}
```

**Success!** The API is now working correctly, and you can access your book data programmatically from your frontend applications.
